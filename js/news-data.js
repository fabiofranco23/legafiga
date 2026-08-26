/* ==========================================================================
   FIGA — Federazione Italiana Giuoco Ani
   news-data.js — fonte dati unica per news e articoli
   --------------------------------------------------------------------------
   Home, Gazzetta del Maine e la pagina articolo leggono TUTTE da qui.
   Per pubblicare un nuovo contenuto: aggiungere un nuovo oggetto all'array
   FIGA_NEWS. Nessun'altra pagina va toccata.

   Campi di ogni voce:
   - id            slug univoco, usato nell'URL: articolo.html?id=...
   - tipo          "news" (solo card breve) oppure "articolo" (ha una pagina
                   dedicata raggiungibile da articolo.html)
   - categoria     etichetta breve mostrata sulla card (es. "Mercato")
   - titolo        titolo della news/articolo (testo esatto, non modificare)
   - occhiello     riga sopra il titolo nella pagina articolo (opzionale)
   - data          testo libero mostrato come data/periodo (opzionale)
   - autore        nome dell'autore (opzionale)
   - estratto      1-2 frasi mostrate nella card
   - contenuto     array di paragrafi HTML per la pagina articolo completa
                   (solo per tipo:"articolo"; le "news" non hanno pagina)
   - evidenza      true = news trattata graficamente come più importante
   - pdf           percorso di un eventuale PDF associato (opzionale)
   ========================================================================== */

var FIGA_NEWS = [
  {
    id: "diciottesimo-interludio",
    tipo: "articolo",
    categoria: "Speciale 18° Anniversario",
    titolo: "Diciottesimo Interludio",
    occhiello: "Speciale 18° anniversario della F.I.G.A.",
    data: "Speciale 18° anniversario",
    autore: "Mike Hanlon",
    estratto: "\u201cSe dico F.I.G.A., qual è la prima immagine che ti viene in mente?\u201d Il racconto celebrativo dei diciotto anni della Federazione, tra ricordi d'estate e il giorno dell'asta.",
    evidenza: true,
    pdf: null,
    contenuto: [
      "<span class=\"articolo-verso\">GUARDATI!<br>Guardati!<br>Sì, tu! Fermati un minuto e guarda.<br>Ti sei fatto grande, no?<br>Sembra ieri quando hai iniziato e ora? Affronti con entusiasmo la maturità!<br>Venditti in sottofondo, la notte che diviene un lenzuolo steso su tutti noi e una semplice strofa intonata all'unisono da chissà quanti altri ma, ed è questo ciò che conta, intonata anche da te:<br>«Notte prima degli esami».</span>",
      "No, no, non è un esame di maturità questo e, certamente, non è la fine di un percorso. Perdona, dunque, il sentimentalismo (anche quello che seguirà); permetti una giustificazione: dopotutto l'età avanza e il periodo estivo è nostalgico per definizione. Dunque, prova a immaginare insieme a me questa lega F.I.G.A. come fosse effettivamente qualcosa che cresce. In tale senso, questo non sarebbe un anno qualunque, non credi? Diciotto anni passano veloci quanto un innamoramento estivo (o forse quanto qualsiasi innamoramento) e questi tuoi diciotto anni sono volati altrettanto velocemente; ma, con altrettanta forza, in qualche modo restano.",
      "…Ok, ok, hai ragione! Poniamo un freno alle sviolinate! D'altronde io non sono Ben Hanscom e tu non sei Beverly Marsh. Tralasciamo le poesie adolescenziali e proviamo a concentrarci su una prosa che possa celebrare questo traguardo.",
      "Ma come si celebra qualcosa che, fondamentalmente, altro non è se non noi, i nostri ultimi diciotto anni? La risposta è più semplice di quanto sembri ma, ancora una volta, per comprenderla tocca guardare indietro. Ce ne sarebbero di cose da raccontare, voltandosi, no? Eppure lo spazio concesso dalla redazione della Gazzetta del Maine è limitato. La cronaca di Derry tende a occuparne la maggior parte. Necessita, dunque, capacità di sintesi, chiarezza ed essenzialità. Da tale bisogno consegue la domanda, l'unica necessaria, l'unica che ti pongo:<br>«Se dico F.I.G.A., qual è la prima immagine che ti viene in mente?»",
      "<em>Ci provo, caro ballerino.</em>",
      "<em>Per me l'immagine è stranamente vaga, sfumata eppure concreta, come un ricordo d'infanzia. Probabilmente comprende più serate estive trascorse pensando, parlando e, dunque, già facendo fantacalcio. Serate di un caldo umido passate a passeggiare per le vie accoglienti del quartiere dove sono cresciuto.</em>",
      "<em>Si tratta di quelle passeggiate lente ma sempre troppo brevi, preludio felice di qualche onere insormontabile all'orizzonte. Mi riferisco a qualche forma di comune scoglio posto là, al termine della passeggiata, al termine dell'estate: una sessione d'esami, il ritorno al lavoro, una ripartenza, eccetera, eccetera.<br>Una sorta di monito del reale, insomma, capace, con il suo opprimere, di dare senso e bellezza allo spazio che lo precedeva, nel quale, appunto, noi passeggiavamo.<br>E qual era, secondo te, il culmine di questo spazio precedente e sospeso?<br>…<br>Ebbene sì!<br>Era, ovviamente, quel momento più atteso, capace di scandire e contare i giorni con una forza e una presenza tali da adombrare quei doveri reali e incombenti: <strong>IL GIORNO DELL'ASTA!</strong></em>",
      "<em>Stava là, atteso e rimandato, perché poi finisce. Ed è ovvio che duri sempre poco, come le passeggiate, come le estati. Perché così ci pare delle cose più belle.</em>",
      "<em>Il ricordo in questione, summa di più ricordi racchiusi in esso, però si sofferma, come dicevo, un po' prima di quell'apice. Perché, se è vero che l'attesa è essa stessa il piacere, allora quelle passeggiate serali sono ciò che di più magico questo magico gioco mi abbia regalato.</em>",
      "<em>Dunque in quelle torno e così mi ritrovo a passeggiare come Istari Grigio accanto al Bianco, il più saggio. Solo che costui non risponde al nome di Saruman, bensì all'appellativo di poeta e, pur non parlando in versetti, nella mia mente declama strofe inaccessibili e meravigliose. Come un Virgilio mi guida nei quartieri estivi, fatti di vie e cunicoli, ed io lo seguo domandando, ascoltando, titubando. E sono pindarici voli su squadre passate, pronostici indovinati e non, esotici colpi, presunti fenomeni di \"Paboniana\" memoria.</em>",
      "<em>D'un tratto, però, i contorni sfumano, il ricordo vira e, come attraversando un'ampia porta al grido \"sortilegico\" di \"MELLON\", mi ritrovo piombato in un'afosa mattina d'agosto. Il cancello di casa dei miei, che mi pare ancor più austero in tal ricordo, è semiaperto e io, sbirciando fuori, intravedo il viso fraterno di un amico che doma imperioso la più nobile delle fantastiche bestie: un Vespino bianco!<br>Così egli mi induce al viaggio, panacea del quotidiano, e si insinua nella tundra urbana come un abile ramingo nel Beleriand, dirigendo me, oltre se stesso, verso i remoti meandri della nobile Casata Tomaselli, il cui esponente, al pari del Signore di Rivendell, ci accoglierà nelle sue ampie terrazze.</em>",
      "<em>È in quelle che si svolgeva, infatti, il più alto e atteso fra tutti i Consigli.</em>",
      "<em>Intorno allo stesso tavolo si avvicendavano alcuni fra gli esponenti più valorosi di tutte le razze. Costoro, confabulanti, trepidavano nell'attesa dell'inizio di un altro viaggio, più metaforico questa volta, ma non meno arduo: quello fra i nomi del roseo listone, vessillo di un antico Testamento al quale noi tutti riservavamo la più salda fede.<br>Fede che mai è venuta meno e che mi porta ancora oggi, dopo diciotto lunghi anni, a scrivere e giocare con le parole e con questi miei, tuoi, nostri ricordi.</em>",
      "<strong><em>Punto!</em></strong>",
      "<em>… o ancora no?</em>",
      "<em>Di quel giorno ammetto di aver tralasciato un dettaglio, fondamentale come solo i dettagli sanno essere, in quanto capace di concludere con perizia la descrizione di questo \u201cFantastico\u201d che è la F.I.G.A. Provo a rimediare.</em>",
      "<em>Durante il tragitto in moto, Vespino bianco, in quella sensazione di serenità distesa, mi lasciavo trasportare e distrarre tanto dal motore quanto dalle osservazioni dell'amico che lo domava. Mentre lo ascoltavo, cogliendo quanto fosse attento, come me, a non rivelare troppo, d'un tratto un'allerta, un monito, un sussulto di puro panico!<br>Egli, l'amico, l'aveva nominato. Non sfacciatamente, ma appena, quasi bisbigliando... Dunque l'interesse era reale!<br>Fu come se, in un attimo, i Nove mi fossero alle calcagna, con le braccia protese verso di me!</em>",
      "<em>Ma essi non erano alle mie spalle: erano dinanzi a me, perfettamente rappresentati tanto da coloro che mi attendevano in terrazza quanto dall'amico che mi guidava e che, adesso era chiaro, si apprestava, giusto per qualche ora, a divenire mio rivale.</em>",
      "<em>Nella mia mente, dunque, un solo pensiero, un segreto impronunciabile, capace di tramutare Sméagol in Gollum in un solo istante, se solo rivelato, se solo ostacolato:</em>",
      "<span class=\"articolo-cita-grande\">«È MIO. TUTTO MIO. CRISTIANO DONI È MIO... IL MIO TESORO!»</span>",
      "<span class=\"articolo-cita-arancio\">Dimmi ora, qual'è la tua immagine?</span>",
      "<span class=\"articolo-fine\">Fine.</span>",
      "<em>Anzi, inizio…</em>",
      "<em>Mike Hanlon</em>"
    ]
  },
  {
    id: "asta-iniziale-data",
    tipo: "news",
    categoria: "Ultim'ora",
    titolo: "La data dell'asta iniziale è stata fissata",
    data: "Stagione 2026-27",
    estratto: "La Giunta conferma: la data dell'asta iniziale sarà il 3 Settembre 2026.",
    evidenza: true
  },
  {
    id: "asta-portieri-chiamata",
    tipo: "news",
    categoria: "Novità",
    titolo: "L'asta dei portieri sarà a chiamata",
    data: "Stagione 2026-27",
    estratto: "Rivoluzione nella F.I.G.A. che si dimostra sempre più aperta alle innovazioni, merito di un Presidente lungimirante e delle proposte eccellenti della Microgiunta."
  },
  {
    id: "bocciata-1000-crediti",
    tipo: "news",
    categoria: "Regolamento",
    titolo: "Bocciata nuovamente la proposta di passare a 1000 crediti",
    data: "Stagione 2026-27",
    estratto: "\u201cSi potevano fare le squadre miegghiulidde\u201d, aggiunge con un tono di polemica uno dei membri che preferisce rimanere anonimo."
  },
  {
    id: "colpetti-scafo",
    tipo: "news",
    categoria: "Mercato",
    titolo: "Occhio ai colpetti di Scafo",
    data: "Stagione 2026-27",
    estratto: "Si punta ai soliti giovani. Ricordando l'eclatante caso Donnarumma."
  },
  {
    id: "gazzetta-non-si-ferma",
    tipo: "news",
    categoria: "Redazione",
    titolo: "La Gazzetta del Maine non si ferma",
    data: "Stagione 2026-27",
    estratto: "La Gazzetta del Maine uscirà presto con nuovi articoli per celebrare il diciottesimo anno della Lega."
  },
  {
    id: "fantalab",
    tipo: "news",
    categoria: "Polemica",
    titolo: "FantaLab, l'innovazione del fantacalcio. Si farà mai?",
    data: "Stagione 2026-27",
    estratto: "Il Presidente rimane fermo nella sua posizione: \u201cPreferisco dimettermi come Presidente piuttosto di utilizzare questi mezzi che snaturano il nostro fantacalcio perfetto\u201d, dichiara Giuseppe Aglialoro."
  }
];

/* Restituisce solo gli elementi di tipo "articolo" con pagina dedicata,
   nell'ordine in cui compaiono in FIGA_NEWS (= ordine editoriale). */
function figaGetArticoli() {
  return FIGA_NEWS.filter(function (n) { return n.tipo === "articolo"; });
}

function figaGetNewsById(id) {
  return FIGA_NEWS.filter(function (n) { return n.id === id; })[0] || null;
}
