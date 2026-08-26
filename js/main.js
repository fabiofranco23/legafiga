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
   RIEPILOGO CAMBI — dashboard
   --------------------------------------------------------------------------
   Dati segnaposto in attesa del collegamento al Google Sheet ufficiale.
   Quando l'integrazione sarà pronta, sostituire semplicemente la funzione
   caricaDatiCambi() con una chiamata reale (es. fetch verso l'endpoint del
   Google Sheet pubblicato), mantenendo la stessa struttura dell'oggetto dati
   restituito: { stagione, aggiornamento, squadre: [...] }.
   ========================================================================== */
function initCambiDashboard() {
  var tabellaBody = document.querySelector("[data-cambi-tabella]");
  if (!tabellaBody) return; // non siamo nella pagina cambi.html

  var dati = caricaDatiCambi();

  popolaStatistiche(dati);
  popolaTabella(dati, tabellaBody);
}

function caricaDatiCambi() {
  // Dati segnaposto (PLACEHOLDER) — chiaramente identificabili come demo.
  // Cambi totali di riferimento: art. 71 del Regolamento FIGA (25 o 30 a
  // seconda della data di inizio stagione). Qui si ipotizzano 30 cambi totali.
  return {
    stagione: "2026-27",
    aggiornamento: "Dati dimostrativi — in attesa del collegamento al Google Sheet",
    cambiTotali: 30,
    squadre: [
      { squadra: "Shakhtar dD", allenatore: "Giuseppe", cambiUsati: 0, cambiTotali: 30 },
      { squadra: "S-O- Tagliapietre", allenatore: "Dario pollo", cambiUsati: 0, cambiTotali: 30 },
      { squadra: "Derry Maine", allenatore: "Andrea", cambiUsati: 0, cambiTotali: 30 },
      { squadra: "Laennister", allenatore: "Fabio", cambiUsati: 0, cambiTotali: 30 },
      { squadra: "River Plaza", allenatore: "Mauro", cambiUsati: 0, cambiTotali: 30 },
      { squadra: "LaughTale", allenatore: "Scafo", cambiUsati: 0, cambiTotali: 30 },
      { squadra: "Dnipork", allenatore: "riccardo", cambiUsati: 0, cambiTotali: 30 },
      { squadra: "Aston Pirla", allenatore: "Marco", cambiUsati: 0, cambiTotali: 30 }
    ]
  };
}

function popolaStatistiche(dati) {
  var elStagione = document.querySelector("[data-stat-stagione]");
  var elAggiornamento = document.querySelector("[data-stat-aggiornamento]");
  var elDisponibili = document.querySelector("[data-stat-disponibili]");
  var elEffettuati = document.querySelector("[data-stat-effettuati]");

  var totaleDisponibili = 0;
  var totaleEffettuati = 0;

  dati.squadre.forEach(function (s) {
    totaleDisponibili += (s.cambiTotali - s.cambiUsati);
    totaleEffettuati += s.cambiUsati;
  });

  if (elStagione) elStagione.textContent = dati.stagione;
  if (elAggiornamento) elAggiornamento.textContent = dati.aggiornamento;
  if (elDisponibili) elDisponibili.textContent = totaleDisponibili;
  if (elEffettuati) elEffettuati.textContent = totaleEffettuati;
}

function popolaTabella(dati, tabellaBody) {
  tabellaBody.innerHTML = "";

  dati.squadre.forEach(function (s) {
    var residui = s.cambiTotali - s.cambiUsati;
    var soglia = s.cambiTotali * 0.2;
    var classeBadge = residui <= soglia ? "badge-disponibili basso" : "badge-disponibili";

    var riga = document.createElement("tr");
    riga.innerHTML =
      '<td>' + s.squadra + '</td>' +
      '<td>' + s.allenatore + '</td>' +
      '<td class="numero">' + s.cambiUsati + '</td>' +
      '<td><span class="' + classeBadge + '">' + residui + ' disponibili</span></td>';

    tabellaBody.appendChild(riga);
  });
}

/* ==========================================================================
   ARCHITETTURA FUTURA (non implementata)
   --------------------------------------------------------------------------
   Il sistema automatico leggerà le email in arrivo da:
     fabiofranco23@gmail.com
   inviate da:
     federazioneitalianagiuocoani09@gmail.com
   (in fase di test anche da fabiofranco233@gmail.com)
   con oggetto contenente la parola "MERCATO", riconoscerà il fantallenatore
   (anche tramite alias), aggiornerà il Google Sheet e, di conseguenza,
   questa pagina. Il modulo caricaDatiCambi() sopra è il punto di innesto
   previsto per quella futura integrazione.
   ========================================================================== */
