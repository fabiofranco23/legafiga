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
    data: null,
    autore: "Mike Hanlon",
    estratto: "\u00abSe dico F.I.G.A., qual è la prima immagine che ti viene in mente?\u00bb",
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
    id: "dnipork-da-record-laughtale-pigliatutto",
    tipo: "articolo",
    categoria: "Edizione straordinaria",
    titolo: "Dnipork da Record, LaughTale Pigliatutto: Partenza col Botto per la XVIII Edizione!",
    occhiello: "La Gazzetta del Maine — Anno XVIII, N. 001",
    data: "09/09/2026",
    autore: "G.M.A.",
    estratto: "Spettacolo, gol a raffica e verdetti già pesanti nel primo turno di Serie A-no della XVIII edizione della F.I.G.A.",
    evidenza: false,
    pdf: "docs/La Gazzetta del Maine - ANNO XVIII - N. 001.pdf",
    contenuto: [
      "Il giorno tanto atteso è finalmente giunto. È partita col botto la diciottesima edizione della FIGA, regalando spettacolo, pioggia di gol e verdetti subito pesanti in questo primo turno di Serie A-no.",
      "A dettare la strada ci pensa una Dnipork spaventosa, che conferma senza nascondersi l'obiettivo di volere conquistare il suo primo, storico titolo. I ragazzi di Sir Daniel firmano una prestazione da record stampando un clamoroso 87 totale, trascinati dalla doppietta del solito L. Martinez e dalla prova monstre di A. Raimondo — autore di una doppietta e incoronato all'unanimità \"Man of the Week FIGA\". A completare il tabellino ci pensa Baturina, per un avvio che suona già come una sentenza.",
      "Non sappiamo ancora se sarà il suo anno, ma è indiscutibilmente la sua giornata: i bucanieri della LaughTale mettono a segno 3 reti e collezionano un pesante 78,5 di giornata. Un punteggio che riesce nell'impresa, assai rara, di far sorridere il Presidente D. Scafo, ora saldo al secondo posto in classifica. Per la LaughTale si tratta di un avvio da sogno, condito dalla conquista dei primi due trofei stagionali: con un netto 3-1, la compagine di Scafo si aggiudica sia la Supercoppa degli ItaliAni che la Super Cup ai danni dei rivali della River Plaza. Il Poeta Vate, reduce dalla vittoria schiacciante dello scorso campionato, parte decisamente a rilento.",
      "A chiudere il podio troviamo la SO Tagliapietre di mister Numero Uno (alias \"il Pollo\"). I gol della certezza M. Thuram e della scommessa A. Cissè fanno gongolare il gemello buono, a cui si aggiunge un prezioso +3 di modificatore di difesa grazie agli assist di F. Dimarco e Y. Couto. Una prestazione solida che non fa rimpiangere le pesanti reti di Kvernadze e Maldini, rimasti mestamente in panchina.",
      "Nel giro di appena due punti e mezzo si accalcano tutte le altre compagini, in una giornata d'esordio dove ogni squadra è riuscita a trovare la via del gol. Meglio la Derry Maine (72,5 punti), spinta dalla rete di M. Hermoso e dall'assist del subentrato R. Mangas (fondamentali per agguantare un ottimo +3 di modificatore). Fanalino di coda a quota 70 punti troviamo invece la squadra del Presidente di Lega, che riprende esattamente da dove aveva concluso la passata stagione.",
      "Sotto il profilo statistico, la prima giornata regala numeri da capogiro: 14 gol complessivi (di cui soltanto uno arrivato dalla panchina), 12 assist (oltre la metà firmati da difensori) e ben 14 punti totali racimolati col modificatore di difesa, premio a cui non partecipa la sola Laennister, scesa in campo con un modulo a 3 dietro.",
      "A completare il quadro, ecco i primi verdetti della fase a gironi di Coppa dei Campiani: nel gruppo A squillo della LaughTale che supera lo Shaktar dD (3-1), mentre la Dnipork conferma lo stato di grazia piegando la River Plaza (6-1); nel gruppo B successo perentorio della SO Tagliapietre contro gli Aston Pirla (3-2), mentre finisce in parità la sfida tra Derry Maine e Laennister (2-2).",
      "Chiudiamo la nostra rassegna stampa riportando il risultato netto di 2-6 per la Dnipork contro la Derry Maine nel primo incontro valido per l'assegnazione del trofeo amichevole Birra Moretti.",
      "<em>G.M.A.</em>"
    ]
  },
  {
    id: "derry-maine-porte-scorrevoli-dnipork-da-record",
    tipo: "articolo",
    categoria: "Edizione straordinaria",
    titolo: "Derry Maine, porte scorrevoli. Dnipork da record!",
    occhiello: "La Gazzetta del Maine — Anno XVIII, N. 002",
    data: "15/09/2026",
    autore: "Mike Hanlon",
    estratto: "Porte scorrevoli per la Derry Maine, mentre la Dnipork prosegue la sua striscia da record: la cronaca della seconda giornata di Serie A-no.",
    evidenza: false,
    pdf: "docs/La Gazzetta del Maine - ANNO XVIII - N. 002.pdf",
    contenuto: [
      "<span class=\"articolo-verso\">«Può il battito d'ali di una farfalla in Brasile provocare un tornado nel Maine?»</span>",
      "Ci sono attimi capaci di stravolgere un'intera narrazione. In ambito cinematografico vengono chiamati \"Sliding Doors\" (porte scorrevoli), dal celebre film in cui Gwyneth Paltrow perdeva o prendeva la metropolitana, mostrandoci due destini alternativi, l'uno escludente l'altro. Due realtà parallele, separate da un bivio, da un istante decisivo!",
      "È quanto accaduto alle 20:44 (ora di Roma, CEST) di venerdì 11 settembre 2026, quando, con un semplice click, è stata confermata la formazione della Derry Maine. Ben sei gol restano in panchina, a fronte dell'unico schierato! Errori, sfortuna, destino: chiamatelo come volete. Qui a Derry, nel Maine, il caso però raramente è tale e, sebbene nessuno ne parli, la sfortuna ha spesso i contorni sinistri di un sorridente pagliaccio ballerino.",
      "Ma le porte sono scorrevoli e, per ogni persona che esce, un'altra entra. Esiste dunque una storia parallela e speculare: quella di chi ostenta un gagliardetto con il nome \"DNPORK\" ricamato sopra! È la favola del gagliardo Daniel Forpàppina che, in sella al \"dromedarico\" Mastantuono (MW di giornata), si concede persino il lusso di una vacanza nella nota \"Baia (Sharm) dello Sceicco (Sheikh)\".",
      "A seguire si registra il sussulto del \"mai sazio\" Presidente e dei suoi \"ciambellini\" che, con la rete di Ramon e la pescata di Pellegrino, portano a casa un buon risultato, tutt'altro che scontato viste le premesse di inizio giornata. I Plaza si accontentano di una prestazione buona ma non brillante, sufficiente comunque a suscitare la poesia: profumata foglia d'alloro nel grigio libeccio settembrino.",
      "Un po' più lente le altre contendenti, tra le quali spicca la corazzata di Numero Uno: metodico nelle scelte, questa volta spettatore del triplo centro del tridente d'attacco (quello in panchina, però).",
      "Stringe i denti il presidente Fabiozzo, apparentemente mai così impreparato all'inverno imminente. La più gloriosa tra le casate vive infatti un avvio di stagione non proprio entusiasmante, salvato oggi dai numerosi assist e dalla rete di Kaiki, una delle tante (forse troppe, a detta dello stesso Fabiozzo) scommesse di reparto.",
      "I Pirla tremano per 48 ore sprofondando in un roboante silenzio, per poi riemergere, prepotenti e tenaci, nelle ultime due partite. È in queste che il più cordiale fra i poliziotti di quartiere salva la giornata, imponendo agli avversari le certezze capitoline Svilar e Bobby, oltre al ghiotto Ekkelenkamp, trucchetto da vecchio mago scafato.",
      "A proposito di conigli e di cilindri, la squadra meno in forma del turno è forse fra quelle più quotate: i Laughtale navigano in piena tempesta. Ma le acque sono impervie per tutti, e così la \"Going Merry\" prosegue la sua rotta nella scia...",
      "<strong>Pagelle</strong>",
      "Sir D. Forpàppina – Azzecca tutto, pure quello che non azzecca (Vasquez). <em>EMPIRICO</em>",
      "Polyzer – Colpito dal Boss Clarence Colombo, sembra perso. Si rialza, meccanico e intento più che mai a punire il crimine. <em>ROBOCOP</em>",
      "Mauretto – \"Fatti non foste a viver come bruti, ma per seguir virtute e canoscenza\". <em>ODISSEICO</em>",
      "Fabiozzo – Qualcuno è già pronto a \"scendere dal carro\". Qualcuno già lo sottovaluta. Ma un Leone non si cura dell'opinione delle pecore; certo fossero polli, sarebbe diverso. <em>CALLIDO</em>",
      "Peppotta – Ore 16, domenica 13/09: \"Ormai ho perso il gol di Pellegrino e praticamente non ho più nessuno che può farmi bonus\". Ore 19:30, lunedì 14/09: gol di Ramon, entra Pellegrino. <em>DELFINICO</em>",
      "Andrea – \"Ma tu, lo so, non ridi, dolcissima signora, ed io non mi nascondo sotto la tua dimora, perché oramai lo sento, non ho sofferto invano, se mi ami come sono, per sempre tuo\". <em>CIRANO</em>",
      "Numero Uno – «Se ni' mondo esistesse un po' di bene e ognun si 'onsiderasse suo fratello, ecc. ecc.» <em>INCOMPRESO</em>",
      "Scafotto – La giustizia vincerà? Certo! Perché i vincitori saranno la giustizia. <em>PIRATA</em>",
      "<em>Mike Hanlon</em>"
    ]
  },
  {
    id: "riparte-apertura-laennister-fa-tremare-serie-a-no",
    tipo: "articolo",
    categoria: "Edizione straordinaria",
    titolo: "Riparte l'Apertura! Prova di forza del Presidente in Coppa, la Laennister fa tremare la Serie A-no!",
    occhiello: "La Gazzetta del Maine — Anno XVIII, N. 004",
    data: "15/10/2026",
    autore: "G.M.A.",
    estratto: "Dopo la sosta per le nazionali riparte l'Apertura: la Laennister firma l'80 più alto di giornata e sale al quarto posto, mentre il Presidente blinda lo Shakhtar dD sul podio della Serie A-no.",
    evidenza: false,
    pdf: "docs/La Gazzetta del Maine - ANNO XVIII - N. 004.pdf",
    contenuto: [
      "E' finita l'attesa. Dopo una sosta per le nazionali lunga un secolo, la FIGA è tornata a far vibrare i cuori dei fantallenatori. E il risveglio non poteva essere migliore: mentre l'Apertura alza ufficialmente il sipario con verdetti già pesanti, la Serie A-no trema sotto i colpi di una Laennister scatenata e fa i conti con i rimpianti e l'orgoglio ferito delle grandi. Il terremoto di giornata porta la firma inconfondibile della Laennister, la creatura perfetta del temibile Fabiozzo delle nevi. Con un impressionante 80 a tutto tondo – il miglior punteggio di giornata – l'armata Branca-Fabiozzi si regala il primo acuto pesante della stagione, entrando di diritto nella prestigiosa classifica Highlander di giornata e balzando prepotente al quarto posto in classifica. Il motore della squadra gira a regime di fuori-giri grazie a un sontuoso K. De Bruyne (autore di una doppietta), alla splendida e decisiva sorpresa D. Osmanjc (gol, assist e MW) e al ritrovato Kolo Muani. La vetta ora non è più un miraggio e le avversarie tremano per davvero.",
      "Sul podio resiste il blocco di testa. Gli Aston Pirla blindano il terzo gradino con un solido 72 firmato Ekkelenkamp, neutralizzando persino il rosso rimediato da D. Malen. Appena sopra, al secondo gradino del podio, troviamo lo Shakhtar dD: la squadra del Presidente risponde presente con un autoritario 75,5 corale, impreziosito da un'esplosione di gioia: il primo, liberatorio gol in maglia rosa-glassata del grande pupillo Andrea Pinamonti. Una risposta d'autore dopo i sussulti delle scorse settimane. Dnipork in apnea: nonostante la vetta resti saldamente nelle mani della squadra di Sir Daniel (312 punti), la capolista barcolla e chiude la giornata a braccetto con il peggior punteggio di giornata (68). Un primato negativo condiviso con la River Plaza del Poeta-Vate, protagonista di un vero e proprio harakiri sportivo: inutile la rete di Orsonaldo, il vero dramma si consuma in panchina, dove riposa beffarda la pesantissima doppietta di N. Kristovic. Appena sopra quota 70 resistono il Sacro Ordine dei Tagliapietre e la Derry del Maine, grazie ai timbri rispettivamente di M. Thuram e A. Rabiot, mentre continua l'incubo senza fine per la LaughTale, sempre più sola all'ultimo posto (275 punti).",
      "<strong>Apertura al via: i primi verdetti del campo</strong>",
      "Il nuovo torneo si apre tra gol a grappoli e blitz esterni. Ecco come sono andati i match inaugurali:",
      "– Laennister vs SO Tagliapietre (4 – 2): l'onda d'urto della Laennister non si ferma alla Serie A-no; i leoni travolgono la squadra di Numero Uno con un poker da stropicciarsi gli occhi.<br>– Aston Pirla vs River Plaza (2 – 1): i «Pirla» si confermano in uno stato di grazia totale, piegando una River Plaza ancora tramortita dai rimpianti di formazione.<br>– Derry Maine – Shakhtar dD (1 – 2): colpo grosso dello Shakhtar che espugna «Il Guscio», confermando l'ottimo momento di salute.<br>– LaughTale – Dnipork (1 – 1): un pareggio che muove appena la classifica e che non fa felice nessuno dei due presidenti.",
      "<strong>Coppa dei Campiani: il giro di boa della seconda giornata</strong>",
      "– Girone A: trionfo di misura dello Shakhtar dD che piega la Dnipork per 2-1 in una sfida d'alta quota; finisce invece in parità (1-1) lo scontro tattico tra River Plaza e LaughTale.<br>– Girone B: il copione si ripete! La Laennister replica il risultato di Apertura e travolge con un roboante 4-2 il Sacro Ordine dei Tagliapietre, mentre si chiude con un pirotecnico 2-2 la battaglia tra Aston Pirla e Derry Maine.",
      "<strong>Extra Time: colpaccio mondiale della River Plaza</strong>",
      "Mentre i riflettori erano puntati altrove, c'è chi la scorsa giornata ha festeggiato (probabilmente a sua insaputa). Accesso trionfale alla fase finale del FIGA Club World Cup da parte della River Plaza; dopo il pareggio sul campo contro la Derry Maine, i maledetti staccano il «pass» grazie a un complessivo da brivido, chiudendo 73,5 contro 73. Quando i dettagli fanno la differenza!",
      "<em>G.M.A.</em>"
    ]
  },
  {
    id: "e-lora-del-turbo",
    tipo: "articolo",
    categoria: "Edizione straordinaria",
    titolo: "«È l'ora del turbo!»",
    occhiello: "La Gazzetta del Maine — Anno XVIII, N. 005",
    data: "23/10/2026",
    autore: "Mike Hanlon",
    estratto: "Un turbo lanciato a tutta velocità per la Dnipork, mentre Shakhtar e Aston Pirla tengono il passo e la Derry Maine sfonda per la prima volta il muro degli 80 punti.",
    evidenza: false,
    pdf: "docs/La Gazzetta del Maine - ANNO XVIII - N. 005.pdf",
    contenuto: [
      "«Una promessa è una promessa»: è questo il titolo italiano del — non così celebre — film natalizio che vedeva un affettuoso Schwarzy passare dal ruolo di padre assente a quello di vero e proprio eroe del figlio: «Turbo-Man». Adesso provate ad abbassare le lenti dei vostri occhiali appena sotto la rima dell'arcata ciliare inferiore, strizzate leggermente gli occhi, permettete alla vista di liberarsi dalle catene del nitido, e di cedere alla fumosa suggestione dell'immagine sfocata. Lo vedete? Caschetto rosso, sorriso «Austriaco», pelle abbronzata e una grossa «T» nel petto. No… non è il vecchio Arnold. È molto di più del semplice attore hollywoodiano, mister Olympia, milionario, filantropo, ex Governatore della California. Signori questi è Sir Daniel Forpàppina, alias Rubi! Ebbene si, la favola che si ostina al reale narra ancora le mitiche gesta della corazzata DNIPORK. Un volo che procede a ritmi impressionanti, spinto dai raggi propulsori del Turbo-Pack più celebre della storia del cinema. Nel film l'allora bambino Jake Loyd, diceva che nessuno voleva «Booster», la fedelissima tigre dai denti a sciabola di Turbo-Man. E' il più classico dei «nessuno vuole essere Robin»; eppure un Robin c'è sempre, deve esserci.",
      "Oggi quel ruolo l'ha rivestito, in abiti stranamente «paglierini» del solito, il buon Mike Hanlon, presidente della nostrana Derry Maine e autore di queste righe. Ebbene si, un sussulto dal suono sinistro, simile al classico «Honk! Honk!» delle tipiche trombette da clown, si è levato come inno in festa in quel del Maine: «La Derry sfonda, per la prima volta in stagione, il muro degli 80 punti!». Niente paura però, all'interno della più rosea delle Fabbriche di ciambelline glassate del pianeta si respira ancora aria di festa e zucchero filato. Lo Shakhtar, infatti, mantiene il gradino mediano del podio con una prestazione maiuscola, che oserei definire «consueta» in questo inizio di stagione. Dietro, non si fanno attendere nemmeno le forze armate degli Aston. I poliz(i)otti giallo-neri, sotto la ferrea guida del Maresciallo Varela (al pari del predecessore, il celeberrimo Rocca), deliziano l'amato presidente e l'intera lega.",
      "In rima alternata vien scritta invece questa pagina della River, che alterna bonus pesanti a malus non più leggeri. Insufficiente la giornata dei «Fedeli alla Pietra», forti però della coriaceità della loro scorza. Fanno peggio i «felinidi» Laennister, che dimenticano così la splendida prestazione della scorsa giornata. Infine, spetta sottolineare come più navighi in acque sempre più torbide la «Going Merry», le cui vele rimangono tuttavia spiegate, in attesa del giusto vento.",
      "<strong>MVP — Prima volta nella storia della Lega.</strong>",
      "Titolo di MW condiviso, a parità di merito, tra le due autentiche sorprese di questa stagione: BANG BANG RAIMONDO e ARMANDO VARELA.",
      "<strong>Occhio al mercato</strong>",
      "«Nemmeno fossimo in via Pergusa il lunedì mattina», commenta qualcuno in riferimento al mercato appena concluso: Noslin si incorona, Mendy mangia ciambelle, Augusto si arruola, Balerdi prende il mare, Pisilli si assicura, Lang sogna, Schmid compra paraffina, Geubbels trova la fede.",
      "<strong>Pagelle di Ben</strong>",
      "Sir D. Forpàppina – «Un Turbo-Man alla vigilia di Natale? Amico faresti meglio a cercare un unicorno o la Dnpork sotto il 70, sarebbe più facile». <em>THE AUSTRIAN OAK</em>",
      "Polyzer – Decimo Tuscolano, come possiamo aiutarla? <em>DILIGENTE</em>",
      "Mauretto – «Ma chi è quel Mona che batte la PORTA e chiude urlando?!». <em>MOSCONICO</em>",
      "Fabiozzo – «Dov'era Gondor quando cadde l'Ovestfalda?». <em>CAVALLERESCO</em>",
      "Peppotta – NO VASCO, NO VASCO! IO NON CI CASCO… <em>DISC JOCKEY</em>",
      "Andrea – Brace d'inverno / i capelli tuoi / dove il mio cuore brucia. <em>CANNONE</em>",
      "Numero 1 – Chi nasconde Atlantide dalle mappe? Chi tiene i Marziani sotto copertura. We Do! We Do!",
      "Scafotto – «Invoco il diritto del Parlay! Secondo il Codice dei Pirati stabilito dai Fratelli della Baia di Morgan, voi dovete condurmi dal vostro Capitano!» <em>FRANCESE</em>",
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
  },
  {
    id: "capocannoniere-rifiutato-raimondo",
    tipo: "news",
    categoria: "Mercato",
    titolo: "Capocannoniere rifiutato: il Presidente dice ancora no a Raimondo",
    data: "Stagione 2026-27",
    estratto: "Il Rubi ci riprova e offre proprio Raimondo, capocannoniere della Serie A-no con 7 gol in altrettante presenze, in cambio di un suo attaccante fermo a due reti. Ma il Presidente rifiuta ancora di prendere il bomber: \u00abGiammai, non ne voglio fuochi di paglia\u00bb. Intanto circola voce di una scommessa personale tra i due, con un Roll\u00f2 col wurstel in palio per chi segner\u00e0 di pi\u00f9 da qui a fine stagione."
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
