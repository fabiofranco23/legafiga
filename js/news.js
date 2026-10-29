/* ==========================================================================
   FIGA — Federazione Italiana Giuoco Ani
   news.js — rendering di news, Gazzetta e pagina articolo
   Dipende da js/news-data.js (deve essere incluso PRIMA di questo file).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  renderHomeNews();
  renderGazzetta();
  renderArticolo();
});

/* Card breve, usata sia in Home sia nella Gazzetta. */
function figaCardNews(n) {
  var linkApertura = n.tipo === "articolo" ? 'articolo.html?id=' + n.id : null;
  var tagEvidenza = n.evidenza ? '<span class="news-tag-evidenza">In evidenza</span>' : "";

  var azione = linkApertura
    ? '<span class="news-link">Leggi l\'articolo →</span>'
    : '<span class="news-link news-link--statica">Comunicato ufficiale</span>';

  var wrapperStart = linkApertura ? '<a href="' + linkApertura + '" class="news-card">' : '<article class="news-card">';
  var wrapperEnd = linkApertura ? '</a>' : '</article>';

  return (
    wrapperStart +
      '<div class="news-card-head">' +
        '<span class="news-categoria">' + n.categoria + '</span>' +
        (n.data ? '<span class="news-data">' + n.data + '</span>' : "") +
        tagEvidenza +
      '</div>' +
      '<h3 class="news-titolo">' + n.titolo + '</h3>' +
      '<p class="news-estratto">' + n.estratto + '</p>' +
      '<div class="news-card-foot">' +
        azione +
      '</div>' +
    wrapperEnd
  );
}

/* -- HOME: sezione "Dalla Gazzetta del Maine" -------------------------------- */
function renderHomeNews() {
  var contenitore = document.querySelector("[data-home-news]");
  if (!contenitore) return;

  var recenti = FIGA_NEWS.filter(function (n) { return n.tipo === "news"; }).slice(0, 3);
  contenitore.innerHTML = recenti.map(figaCardNews).join("");
}

/* -- GAZZETTA: articoli in evidenza + elenco news ---------------------------- */
/* Etichetta in alto sulla card: "Edizione n°X" quando l'occhiello riporta un
   numero di edizione (es. "N. 004"); altrimenti si usa la categoria normale
   (es. per gli speciali senza numero, come il Diciottesimo Interludio). */
function figaKickerEvidenza(a) {
  var match = a.occhiello && a.occhiello.match(/N\.\s*0*(\d+)/i);
  return match ? "Edizione n°" + match[1] : a.categoria;
}

/* Nella meta sotto l'estratto la data compare come "Edizione N. ... del ..."
   quando l'occhiello riporta un numero di edizione; altrimenti si mostra
   semplicemente la data, invariata. */
function figaEtichettaEdizione(a) {
  if (!a.data) return "";
  var match = a.occhiello && a.occhiello.match(/N\.\s*(\d+)/i);
  return match ? "Edizione N. " + match[1] + " del " + a.data : a.data;
}

function figaBloccoEvidenza(a) {
  return (
    '<div class="gazzetta-evidenza reveal">' +
      '<span class="evidenza-kicker">' + figaKickerEvidenza(a) + '</span>' +
      '<h2 class="evidenza-titolo">' + a.titolo + '</h2>' +
      '<p class="evidenza-estratto">' + a.estratto + '</p>' +
      '<div class="evidenza-meta">' +
        (a.autore ? '<span>' + a.autore + '</span>' : "") +
        (a.data ? '<span>' + figaEtichettaEdizione(a) + '</span>' : "") +
      '</div>' +
      '<a href="articolo.html?id=' + a.id + '" class="btn btn-oro">Leggi l\'articolo completo →</a>' +
    '</div>'
  );
}

/* Collega le frecce prev/next di uno slider della Gazzetta allo scroll
   orizzontale del relativo "track" (stesso principio di team.js per lo
   slider Fantallenatori): un click scorre esattamente di una card. */
function figaWireGazzettaSlider(trackSelector, itemSelector, prevSelector, nextSelector) {
  var track = document.querySelector(trackSelector);
  if (!track) return;

  var btnPrev = document.querySelector(prevSelector);
  var btnNext = document.querySelector(nextSelector);

  function passo() {
    var item = track.querySelector(itemSelector);
    if (!item) return 300;
    var stile = getComputedStyle(track);
    var gap = parseFloat(stile.columnGap || stile.gap || "0") || 0;
    return item.getBoundingClientRect().width + gap;
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", function () {
      track.scrollBy({ left: -passo(), behavior: "smooth" });
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", function () {
      track.scrollBy({ left: passo(), behavior: "smooth" });
    });
  }
}

function renderGazzetta() {
  var contenitoreNews = document.querySelector("[data-gazzetta-news]");
  var contenitoreEvidenza = document.querySelector("[data-gazzetta-evidenza]");
  if (!contenitoreNews && !contenitoreEvidenza) return;

  var articoli = figaGetArticoli();
  var news = FIGA_NEWS.filter(function (n) { return n.tipo === "news"; });

  if (contenitoreEvidenza && articoli.length) {
    // Nella Gazzetta l'ordine visivo è "più recente per primo";
    // l'ordine cronologico originale (usato per precedente/successivo
    // nella pagina articolo) resta invariato: si inverte solo qui.
    var articoliRecenti = articoli.slice().reverse();
    contenitoreEvidenza.innerHTML = articoliRecenti.map(figaBloccoEvidenza).join("");

    figaWireGazzettaSlider(
      "[data-gazzetta-evidenza]",
      ".gazzetta-evidenza",
      "[data-gazzetta-evidenza-prev]",
      "[data-gazzetta-evidenza-next]"
    );
  }

  if (contenitoreNews) {
    // Anche qui l'ordine visivo è "più recente per primo" (solo nella Gazzetta;
    // la Home, che mostra le prime 3 news, non viene toccata).
    var newsRecenti = news.slice().reverse();
    contenitoreNews.innerHTML = newsRecenti.map(figaCardNews).join("");

    figaWireGazzettaSlider(
      "[data-gazzetta-news]",
      ".news-card",
      "[data-gazzetta-news-prev]",
      "[data-gazzetta-news-next]"
    );
  }
}

/* -- PAGINA ARTICOLO (articolo.html?id=...) ---------------------------------- */
function renderArticolo() {
  var root = document.querySelector("[data-articolo-root]");
  if (!root) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var articoli = figaGetArticoli();
  var indice = -1;
  for (var i = 0; i < articoli.length; i++) {
    if (articoli[i].id === id) { indice = i; break; }
  }

  if (indice === -1) {
    root.innerHTML =
      '<div class="articolo-non-trovato">' +
        '<span class="eyebrow">Articolo non trovato</span>' +
        '<h1 class="section-title">Questo articolo non esiste (ancora)</h1>' +
        '<p class="section-lede">Torna alla Gazzetta del Maine per consultare gli articoli disponibili.</p>' +
        '<a href="gazzetta.html" class="btn btn-oro">Torna alla Gazzetta</a>' +
      '</div>';
    document.title = "Articolo non trovato — F.I.G.A.";
    return;
  }

  var art = articoli[indice];
  var precedente = articoli[indice - 1] || null;
  var successivo = articoli[indice + 1] || null;

  document.title = art.titolo + " — Gazzetta del Maine — F.I.G.A.";

  var corpo = (art.contenuto || []).map(function (par) {
    return '<p>' + par + '</p>';
  }).join("");

  var metaBits = [];
  if (art.autore) metaBits.push('<span class="articolo-autore">' + art.autore + '</span>');
  if (art.data) metaBits.push('<span>' + art.data + '</span>');

  root.innerHTML =
    '<div class="breadcrumb"><a href="index.html">Home</a><span class="sep">/</span><a href="gazzetta.html">Gazzetta del Maine</a><span class="sep">/</span><span>' + art.titolo + '</span></div>' +
    '<span class="eyebrow eyebrow--light">' + art.categoria + '</span>' +
    (art.occhiello ? '<p class="articolo-occhiello">' + art.occhiello + '</p>' : "") +
    '<h1 class="articolo-titolo-principale">' + art.titolo + '</h1>' +
    '<div class="articolo-meta">' + metaBits.join('<span class="puntino-sep">·</span>') + '</div>' +
    (art.pdf ? '<a href="' + art.pdf + '" class="btn btn-oro" target="_blank" rel="noopener" style="margin-bottom: 34px;">Scarica l\'articolo →</a>' : "");

  var corpoWrap = document.querySelector("[data-articolo-corpo]");
  if (corpoWrap) corpoWrap.innerHTML = corpo;

  var nav = document.querySelector("[data-articolo-nav]");
  if (nav) {
    nav.innerHTML =
      (precedente
        ? '<a href="articolo.html?id=' + precedente.id + '" class="articolo-nav-link articolo-nav-prev"><span>← Articolo precedente</span><strong>' + precedente.titolo + '</strong></a>'
        : '<span class="articolo-nav-link articolo-nav-disabilitato"><span>← Articolo precedente</span><strong>Non disponibile</strong></span>') +
      '<a href="gazzetta.html" class="articolo-nav-torna">Torna alla Gazzetta</a>' +
      (successivo
        ? '<a href="articolo.html?id=' + successivo.id + '" class="articolo-nav-link articolo-nav-next"><span>Articolo successivo →</span><strong>' + successivo.titolo + '</strong></a>'
        : '<span class="articolo-nav-link articolo-nav-disabilitato"><span>Articolo successivo →</span><strong>In arrivo</strong></span>');
  }

  var correlati = document.querySelector("[data-articolo-correlati]");
  if (correlati) {
    var altreNews = FIGA_NEWS.filter(function (n) { return n.id !== art.id; }).slice(0, 3);
    if (altreNews.length) {
      correlati.innerHTML = altreNews.map(figaCardNews).join("");
    } else {
      correlati.closest("section").style.display = "none";
    }
  }
}
