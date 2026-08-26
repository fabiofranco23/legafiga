/* ==========================================================================
   FIGA — Federazione Italiana Giuoco Ani
   main.js — comportamenti condivisi del sito
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initMenuMobile();
  initReveal();
  initCambiDashboard();
});

/* URL ufficiale e definitivo dell'API Google Apps Script della F.I.G.A.
   Restituisce solo dati pubblici (squadra, fantallenatore, cambi) — nessuna
   credenziale, token o contenuto email è mai esposto qui o nel resto del sito. */
var CAMBI_API_URL = "https://script.google.com/macros/s/AKfycbzdgQ3DSIlVnI4ze-Fb6wP3Wuir5hBo_v_LuzFoJqEwJ-mUMUxGq7gylBgR2cUaD-UR/exec";

/* -- Header: ombra/sfondo più marcato dopo lo scroll ------------------------ */
function initHeader() {
  var header = document.querySelector(".site-header");
  if (!header) return;

  function aggiorna() {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  aggiorna();
  window.addEventListener("scroll", aggiorna, { passive: true });
}

/* -- Menu hamburger su mobile ------------------------------------------------ */
function initMenuMobile() {
  var toggle = document.querySelector(".hamburger");
  var body = document.body;

  if (!toggle) return;

  toggle.addEventListener("click", function () {
    var aperto = body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", aperto ? "true" : "false");
  });

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* -- Reveal on scroll: elementi con classe .reveal compaiono all'ingresso --- */
function initReveal() {
  var elementi = document.querySelectorAll(".reveal");
  if (!elementi.length) return;

  if (!("IntersectionObserver" in window)) {
    elementi.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  elementi.forEach(function (el) { observer.observe(el); });
}

/* ==========================================================================
   RIEPILOGO CAMBI — dashboard collegata all'API Google Apps Script
   --------------------------------------------------------------------------
   Nessun dato è scritto a mano qui: ad ogni caricamento (e ad ogni click su
   "Aggiorna") la pagina interroga CAMBI_API_URL e mostra la risposta reale.
   Il sito legge SOLO questa API pubblica: non accede in alcun modo al
   Google Sheet, a Gmail o a credenziali di alcun tipo.
   ========================================================================== */
function initCambiDashboard() {
  var griglia = document.querySelector("[data-cambi-griglia]");
  if (!griglia) return; // non siamo nella pagina cambi.html

  var elCaricamento = document.querySelector("[data-stato-caricamento]");
  var elErrore = document.querySelector("[data-stato-errore]");
  var elAggiornamento = document.querySelector("[data-stat-aggiornamento]");
  var elStagione = document.querySelectorAll("[data-stat-stagione]");
  var bottoniAggiorna = document.querySelectorAll("[data-btn-aggiorna]");

  function mostraStato(stato) {
    griglia.classList.toggle("is-visibile", stato === "dati");
    if (elCaricamento) elCaricamento.classList.toggle("is-visibile", stato === "caricamento");
    if (elErrore) elErrore.classList.toggle("is-visibile", stato === "errore");
  }

  function impostaIndicatore(stato, testo) {
    if (!elAggiornamento) return;
    elAggiornamento.classList.remove("stato-caricamento", "stato-errore");
    if (stato) elAggiornamento.classList.add(stato);
    var span = elAggiornamento.querySelector("[data-aggiornamento-testo]");
    if (span) span.textContent = testo;
  }

  function formattaData(isoString) {
    try {
      var d = new Date(isoString);
      return d.toLocaleString("it-IT", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit"
      });
    } catch (e) {
      return isoString;
    }
  }

  function caricaDati() {
    mostraStato("caricamento");
    impostaIndicatore("stato-caricamento", "Caricamento dati…");
    bottoniAggiorna.forEach(function (b) { b.classList.add("is-loading"); });

    // cache-busting esplicito: ogni click su "Aggiorna" deve arrivare
    // davvero all'API, non a una risposta GET messa in cache dal browser.
    var url = CAMBI_API_URL + "?t=" + Date.now();

    fetch(url, { method: "GET", mode: "cors", cache: "no-store" })
      .then(function (risposta) {
        if (!risposta.ok) {
          throw new Error("HTTP " + risposta.status + " " + risposta.statusText);
        }
        return risposta.json();
      })
      .then(function (json) {
        if (!json || json.success !== true || !Array.isArray(json.data)) {
          throw new Error("Formato JSON inatteso: " + JSON.stringify(json).slice(0, 200));
        }
        renderizzaSquadre(json.data, griglia);
        elStagione.forEach(function (el) { el.textContent = json.stagione || "—"; });
        impostaIndicatore(null, "Ultimo aggiornamento: " + formattaData(json.ultimoAggiornamento));
        mostraStato("dati");
      })
      .catch(function (errore) {
        // L'errore reale non va mai nascosto: resta in console per il debug,
        // mentre l'interfaccia mostra un messaggio semplice all'utente.
        console.error("[F.I.G.A. — Riepilogo Cambi] Chiamata API fallita:", errore);
        impostaIndicatore("stato-errore", "Impossibile aggiornare i dati.");
        mostraStato("errore");
      })
      .finally(function () {
        bottoniAggiorna.forEach(function (b) { b.classList.remove("is-loading"); });
      });
  }

  function renderizzaSquadre(squadre, contenitore) {
    contenitore.innerHTML = "";

    // Ordine ufficiale della Lega: si mantiene l'ordine restituito dall'API,
    // senza alcun riordino alfabetico.
    squadre.forEach(function (s) {
      var soglia = (s.cambiIniziali || 0) * 0.2;
      var classeBlocco = s.cambiRimasti <= soglia ? "cambi-rimasti-blocco basso" : "cambi-rimasti-blocco";

      var card = document.createElement("article");
      card.className = "cambi-card";
      card.innerHTML =
        '<div class="cambi-squadra">' + s.squadra + '</div>' +
        '<div class="cambi-allenatore">' + s.fantallenatore + '</div>' +
        '<div class="cambi-riga"></div>' +
        '<div class="cambi-effettuati-row">' +
          '<span class="label">Cambi effettuati</span>' +
          '<span class="valore">' + s.cambiEffettuati + '</span>' +
        '</div>' +
        '<div class="' + classeBlocco + '">' +
          '<span class="label">Cambi rimasti</span>' +
          '<span class="valore">' + s.cambiRimasti + '</span>' +
        '</div>';

      contenitore.appendChild(card);
    });
  }

  bottoniAggiorna.forEach(function (b) {
    b.addEventListener("click", caricaDati);
  });

  caricaDati();
}

/* ==========================================================================
   ARCHITETTURA (già in produzione)
   --------------------------------------------------------------------------
   Gmail → Google Apps Script → Google Sheet → doGet() → JSON API (CAMBI_API_URL)
   Il frontend qui sopra si occupa solo di leggere quell'API pubblica.
   Nessuna parte di questo repository contiene password, token, credenziali
   Google, dati Gmail, alias o contenuti delle email di mercato.
   ========================================================================== */
