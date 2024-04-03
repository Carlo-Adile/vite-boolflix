# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Esercizio: Boolflix

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Replicare la logica dei siti che permettono la riproduzione streaming di contenuti.
Utilizzare un API per ottenere risultati congrui:  https://www.themoviedb.org. Consultare le chiamate su: https://developers.themoviedb.org/3.
La chiamata principale è Search > Movies, che ci permette di cercare i film associati ad una ricerca (query).

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Milestone 1:
Creare un layot base con una searchbar (input e button) in cui possiamo scrivere completamente o parzialmente il nome di un film grazie all'utilizzo dell'API.
Visualizzare su schermo i seguenti...
1. titolo
2. titolo originale
3. lingua
4. voto

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Milestone 2:
Trasformiamo la stringa statica della lingua in una bandiera della nazione corrispondente.
Allargare il campo di ricerca anche alle serie tv, in modo che con la stessa azione di ricerca possiamo trovare film e serie tv simili all'input inserito.

Esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Milestone 3:
Aggiungiamo la copertina del film/serie tv al "nostro elenco".
Ci viene passata dall’API solo la parte finale dell’URL, questo
perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
Dovremo prendere quindi l’URL base delle immagini di TMDB:
https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare
(troviamo tutte le dimensioni possibili a questo link:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la
parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da
permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5,
lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze
piene (o mezze vuote :P)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Milestone 4:
Realizziamo la webapp dotata di un layout completo simile a Netflix con...
- header con logo e search bar
- card con la copertina dei risultati ottenuti (consigliata poster_path w342)
- effetto on hover sull'elemento che mostra il retro della card con titolo, titolo originale, voto con stelline, overview.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Consigli:
1. Andate in fila, seguendo le milestone, non pensate all’interfaccia grafica fino
al punto 4
2. Non pensate all’interfaccia grafica fino al punto 4 (si, l’ho scritto due volte),
tutto può essere risolto con una <ul> non stilizzata
3. Ricordatevi quanto imparato finora con le diverse esercitazioni:
○ Affrontate sempre prima il caso base minimo, senza complicazioni (ad
es. “Se il titolo originale è uguale al titolo, magari dovrei nasconderlo”,
“Se faccio una ricerca che non ha nessun risultato dovrei scrivere
qualcosa” sono domande da NON FARSI fino a quando non si è fatto
completamente un caso base)
○ Se ti viene volta di copiare/incollare codice, NON FARLO, fai una
funzione! Quei pochi minuti risparmiati renderanno il tuo codice meno
leggibile ed ogni volta che dovrai intervenire su quella parte perderai
molto più tempo
○ Prima di andare avanti, assicurati di aver risolto quella parte nel miglior
modo possibile (codice non ripetuto, minimo codice possibile, funzioni
chiare e riutilizzabili). Risparmierai tantissimo tempo risolvendo gli
esercizi successivi
○ Meglio risolvere una milestone in meno, ma con codice scritto bene
4. Per avere la lista delle lingue utilizzare:
https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Milestone 5 (opzionale):
Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno
parte del cast aggiungendo alla nostra scheda Film / Serie SOLO i primi 5 restituiti
dall’API con Nome e Cognome, e i generi associati al film con questo schema:
“Genere 1, Genere 2, ...”.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Milestone 6 (Opzionale):
Creare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i
generi tv e movie per mostrare/nascondere le schede ottenute con la ricerca.