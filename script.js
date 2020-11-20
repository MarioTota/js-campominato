// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// ci servono:
// FUNZIONI
// funzione per generare numeri casuali
// funzione che verifica la presenza di un elemento in un array

// VARIABILI
// array di numeri casuali (bombs)
// numero massimo di possibilità
// array di tentativi
// punteggio


function randomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isInArray(array, element) {
  var found = false;

  for (var i = 0; i < array.length; i++) {

    if (element == array[i]) {
      found = true;
      return found;
    }
  }
  return found;
}

var bombs = [];
var attempts = [];
var score = 0;
// BONUS
var level;
var maxNumber;
level = prompt("scegli la difficoltà: 0,1,2");

switch(level) {
  case "2":
    maxNumber = 50;
  //valori compresi tra 1 e 50
    break
  case "1":
    maxNumber = 80;
  //valori compresi tra 1 e 80
    break
  default:
  maxNumber = 100;
  //valori compresi tra 1 e 100
}
maxAttempts = maxNumber - 16;
// console.log(bombs.length);
// for(var i = 0; i < 16; i++) {
//   var randomNumber = randomIntegerBetween(1, 100);
//   bombs.push(randomNumber);
// }
// console.log(bombs.length);

// generazione bombe
while(bombs.length < 16) {
  var randomNumber = randomIntegerBetween(1, maxNumber);
  // console.log("numero casuale generato: " , randomNumber);
  var check = isInArray(bombs, randomNumber);

  if (check == false) {
    bombs.push(randomNumber)
  }
  // console.log(bombs.length);
}
console.log(bombs);
// /generazione bombe

//gioco

// for (var i = 0; i < maxAttempts; i++) {
//   var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
//   attempts.push(userNumber);
// }

var lost = false;
while (attempts.length < maxAttempts && lost == false) {
  var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e " + maxNumber));
  // console.log(userNumber);
  var checkAttempts = isInArray(attempts, userNumber);
  console.log("Numero duplicato?" , checkAttempts);

  var gameCheck = isInArray(bombs, userNumber);
  console.log("Ho trovato una bomba?" , gameCheck)

  if(gameCheck == true) {
    alert("Hai perso")
    lost = true;
  } else if (checkAttempts == false) {
    attempts.push(userNumber);
    score++;
  } else {
    alert("numero duplicato");
  }
}

score = attempts.length;
alert("Punteggio:" + score);
console.log(attempts);
// /gioco
