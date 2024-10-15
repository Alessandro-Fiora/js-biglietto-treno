// ! RACCOLTA DATI

// * chiedo all'utente numero di km da percorrere
const distance = parseInt(
  prompt("Inserisci il numero intero di KM che vuoi percorrere")
);

// * chiedo all'utente età del passeggero
const age = parseInt(prompt("Inserisci l'età del passeggero"));

// * creo const prezzo al km
const priceForKm = 0.21;

// * creo const sconto under 18
const discountPercentageUnder18 = 20;

// * creo const sconto over 65
const discountPercentageOver65 = 40;

// * creo output
let output;

// * creo prezzo totale
let totPrice;

// ! ELABORAZIONE

// * controllo validità input distanza
const isDistanceValid = !isNaN(distance) && distance > 0;

// * controllo validità input età
const isAgeValid = !isNaN(age) && age > 0;

// * SE input distanza E input età sono validi
if (isDistanceValid && isAgeValid) {
  // * calcolo prezzo totale
  totPrice = distance * priceForKm;

  // * aggiorno output con prezzo totale
  output = totPrice;

  // * SE l'età dell'utente è MINORE di 18 anni
  if (age < 18) {
    // * applico sconto 20%
    totPrice = totPrice - totPrice * (discountPercentageUnder18 / 100);
    // * aggiorno output con prezzo in forma umana (max 2 decimali)
    output = `Il prezzo del biglietto è di: ${totPrice.toFixed(
      2
    )}€, già scontato del ${discountPercentageUnder18}%`;
  }

  // * SE l'età dell'utente è MAGGIORE O UGUALE di 65 anni
  else if (age >= 65) {
    // * applico sconto 40%
    totPrice = totPrice - totPrice * (discountPercentageOver65 / 100);
    // * aggiorno output con prezzo in forma umana (max 2 decimali)
    output = `Il prezzo del biglietto è di: ${totPrice.toFixed(
      2
    )}€, già scontato del ${discountPercentageOver65}%`;
  }
}

// * ALTRIMENTI ( se input distanza E input età NON sono validi)
else {
  output = "I dati iseriti non sono corretti";
}

// ! OUTPUT
alert(output);
