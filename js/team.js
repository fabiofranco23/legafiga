/* ==========================================================================
   FIGA — Federazione Italiana Giuoco Ani
   team.js — componente card Fantallenatore, riusato in due punti:
   - griglia della pagina fantallenatori.html
   - slider della Home
   Dipende da js/team-data.js (deve essere incluso PRIMA di questo file).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  renderFantallenatoriGrid();
  renderFantallenatoriSlider();
});

function figaIniziali(nome) {
  return nome
    .split(" ")
    .filter(Boolean)
    .map(function (p) { return p.charAt(0).toUpperCase(); })
    .slice(0, 2)
    .join("");
}

function figaDescrizioneHtml(testo) {
  return testo
    .split("\n\n")
    .map(function (par) { return "<p>" + par.replace(/\n/g, "<br>") + "</p>"; })
    .join("");
}

/* Componente card unico: stessa funzione per griglia e slider. */
function figaCardFantallenatore(t, indice) {
  var numero = String(indice + 1).padStart(2, "0");
  return (
    '<article class="cartellino reveal">' +
      '<span class="cartellino-numero">' + numero + '</span>' +
      '<div class="cartellino-avatar">' +
        '<span class="cartellino-iniziali">' + figaIniziali(t.name) + '</span>' +
        '<img class="cartellino-foto" src="' + t.photo + '" alt="' + t.name + '" loading="lazy" onerror="this.remove()">' +
      '</div>' +
      '<div class="cartellino-squadra">' + t.name + '</div>' +
      '<div class="cartellino-riga"></div>' +
      '<div class="cartellino-allenatore">' + t.team + '</div>' +
      '<div class="cartellino-descrizione">' + figaDescrizioneHtml(t.description) + '</div>' +
    '</article>'
  );
}

function renderFantallenatoriGrid() {
  var contenitore = document.querySelector("[data-fant-grid]");
  if (!contenitore) return;
  contenitore.innerHTML = FIGA_TEAM.map(figaCardFantallenatore).join("");
}

function renderFantallenatoriSlider() {
  var track = document.querySelector("[data-fant-slider-track]");
  if (!track) return;

  track.innerHTML = FIGA_TEAM.map(figaCardFantallenatore).join("");

  var btnPrev = document.querySelector("[data-fant-slider-prev]");
  var btnNext = document.querySelector("[data-fant-slider-next]");

  function passo() {
    var card = track.querySelector(".cartellino");
    if (!card) return 300;
    var stile = getComputedStyle(track);
    var gap = parseFloat(stile.columnGap || stile.gap || "22") || 22;
    return card.getBoundingClientRect().width + gap;
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
