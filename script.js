// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// ci servono
// FUNZIONI
// funzione per generare numeri casuali
// funzione che verifica la presenza di un elemento in un array
function numberGenerator(min, max) {
  var numeroRandom = parseInt(Math.floor(Math.random() * max) + min);
  return numeroRandom;
}

function isInArray(array, element) {
  var found = false;
  for (var i = 0; i < array.length; i++) {
    if(element == array[i]) {
      found = true;
    }
  }
  return found;
}
// VARIABILI
// array di numeri casuali (bombe)
// numero massimo di possibilità
// array di tentativi
// punteggio

var bombs = [];

// var maxAttempts = 100 - 16;
var maxAttempts = 5;

var attempts = [];
var score = 0;

// generazione bombe
for (var i = 0; i < 16; i++) {
  var numeroGenerato = numberGenerator(1,100);
  bombs.push(numeroGenerato);
}
// /generazione bombe

// controllo duplicati
while (i < bombs.lenght) {
  var numeroGenerato = numberGenerator(1,100);
  var check = isInArray(bombs,numeroGenerato)

  if (check == false ) {
    bombs.push(numeroGenerato);
  }
}
console.log(bombs);
// /controllo duplicati

// gioco

while (attempts.lenght < maxAttempts) {
  var userNumber = parseInt(prompt("Inserisci numeri"));
  console.log(userNumber);
  var checkAttempts = isInArray(attempts,userNumber);
  console.log(checkAttempts);

  if (checkAttempts == false ) {
    attempts.push(userNumber);
  }
}
console.log(attempts);

// /gioco
