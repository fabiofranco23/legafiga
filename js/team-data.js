/* ==========================================================================
   FIGA — Federazione Italiana Giuoco Ani
   team-data.js — fonte dati unica per i fantallenatori
   --------------------------------------------------------------------------
   Usata sia dalla pagina fantallenatori.html (griglia) sia dallo slider
   della Home. Per modificare un fantallenatore basta aggiornare qui.

   Campi:
   - name         nome e cognome (titolo principale della card)
   - team         nome della squadra (sottotitolo)
   - photo        percorso della foto in image/. Il file può non esistere
                  ancora: la card gestisce da sola il fallback (vedi js/team.js)
   - description  testo esatto della descrizione, non modificare il tono
   ========================================================================== */

var FIGA_TEAM = [
  {
    name: "Giuseppe Aglialoro",
    team: "Shakhtar dD",
    photo: "image/foto giuseppe.jpeg",
    description: "Presidente, Presidentissimo! Superlativo assoluto.\n\nFondatore della Lega ed indiscusso dominatore dei mercati negli anni, riuscirà a tornare alla vittoria dopo l\u2019ultimo posto della stagione 2025/2026?"
  },
  {
    name: "Dario Pollarolo",
    team: "S-O- Tagliapietre",
    photo: "image/foto pollo.jpeg",
    description: "La polemica.\n\nSe cerchi \u2018\u2019polemica\u2018\u2019 sul dizionario Treccani troverai la sua foto.\n\nFantallenatore innovatore che durante i mercati sposta calciatori come fossero marittimi alla deriva!"
  },
  {
    name: "Andrea Aglialoro",
    team: "Derry Maine",
    photo: "image/foto andrea.jpeg",
    description: "Clown ballerino.\n\nOggi da annoverare tra le vecchie glorie come furono tanti compianti fenomeni come Alexinho. Torner\u00e0 quello di un tempo? Speriamo di no."
  },
  {
    name: "Fabio Franco",
    team: "Laennister",
    photo: "image/foto fabio.jpg",
    description: "Il temibile Fabiozzo delle nevi.\n\nMacchina da guerra della lega: mai scherzare di fantacalcio con Fabiozzo, mai pensarlo in calo, con i suoi quattro terzini in difesa lui sar\u00e0 sempre li a contendersi il titolo...anno dopo anno!"
  },
  {
    name: "Mauro Piazza",
    team: "River Plaza",
    photo: "image/foto mauro.jpeg",
    description: "Uno come te, un poeta!\n\nOgni anno fa squadre alle quali non si darebbe un euro e ad anni alterni vince dando cinquanta punti al secondo! L\u2019acqua di mare, il sole e la miscela lo rendono il bagnino benzinaio pi\u00f9 amato dagli italiani."
  },
  {
    name: "Dario Scafidi",
    team: "LaughTale",
    photo: "image/foto scafo.jpeg",
    description: "Lui dice NO!\n\nMembro pi\u00f9 conservatore della lega! Vede ogni piccola modifica del regolamento come un affronto quasi personale. Grande talent scout ed anche quest\u2019anno, come ogni anno, questo \u00e8 il suo anno!"
  },
  {
    name: "Riccardo Rubino",
    team: "Dnipork",
    photo: "image/foto riccardo.jpeg",
    description: "Lo sceriffo.\n\nCon gli ultimi aggiornamenti regolamentari sar\u00e0 il vigilante notturno della lega.\n\nRicordato pi\u00f9 per il record di ginger zero consumati in poche ore che per i titoli vinti."
  },
  {
    name: "Marco Polizzi",
    team: "Aston Pirla",
    photo: "image/foto marco.jpeg",
    description: "Scuola di polizia!\n\nPoliziotto nella vita, distillatore di amari per passione.\n\nHa gi\u00e0 annunciato che tenter\u00e0 di alzare il tasso alcolemico del gruppo per strappare la vittoria."
  }
];
