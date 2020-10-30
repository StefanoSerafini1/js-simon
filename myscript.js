//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


var numEstratti = [];
var numeri=5;

for (var i = 0; i < numeri; i++) {
  var random = Math.floor( Math.random() * 100) + 1;
    if (numEstratti.includes(random)) {
    i--;
    } else {
    numEstratti.push(random);
    }
}

var secondi = 30;

var display = document.getElementById('timer');

var timerd = setInterval(function() {

  display.innerHTML = secondi;

  if (secondi == 0) {
    clearInterval(timerd)
  } else {
    secondi--;
  }

}, 1000);

alert('Ricorda i numeri estratti ' + numEstratti);

setTimeout(timer, 30000);

function timer() {
  var num = [];
  var azzeccati = 0;
  for (var i = 0; i < numeri; i++) {
    var numVisti = parseInt ( prompt('Digita i numeri che hai visto e ti ricordi').trim());
      if (numEstratti.includes(numVisti)) {
        num.push(numVisti);
        azzeccati++;
        alert('Azzeccato');
      } else {
        alert('Sbagliato');
      }
  }
  alert('Hai indovinato: ' + num + ' per un punteggio di ' + azzeccati);
  console.log('Hai indovinato: ' + num + ' per un punteggio di ' + azzeccati);
}
