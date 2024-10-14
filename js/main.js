// ! RACCOLTA DATI

// ^ chiedo all'utente numero di km da percorrere
const distance = parseInt(
  prompt("Inserisci il numero di KM che vuoi percorrere")
);

console.log(`distance: ${distance}, ${typeof distance}`);

// ^ chiedo all'utente età del passeggero

const age = parseInt(prompt("Inserisci l'età del passeggero"));

console.log(`age: ${age}, ${typeof age}`);

// ^ creo var prezzo al km

let priceForKm = 0.21;

console.log(`priceForKm: ${priceForKm}, ${typeof priceForKm}`);

// ^ creo output

let output;

// ^ creo finalPrice

let finalPrice;

// ! ELABORAZIONE

finalPrice = distance * priceForKm;
console.log(`finalPrice: ${finalPrice}, ${typeof finalPrice}`);

// ^ SE l'età dell'utente è MINORE di 18 anni
if (age < 18) {
}
// ^ applico sconto 20%
// ^ aggiorno output

// ^ SE l'età dell'utente è MAGGIORE di 65 anni
// ^ applico sconto 40%
// ^ aggiorno output

// ! OUTPUT

// ^ STAMPO output in forma umana (max 2 decimali)
