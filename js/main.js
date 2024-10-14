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

// ^ creo totPrice

let totPrice;

// ! ELABORAZIONE

totPrice = distance * priceForKm;
console.log(`prima dei controlli: totPrice: ${totPrice}, ${typeof totPrice}`);

// ^ SE l'età dell'utente è MINORE di 18 anni
if (age < 18) {
  const discountPercentage = 20;
  // ^ applico sconto 20%
  totPrice = totPrice - totPrice * (discountPercentage / 100);
  console.log(`MINORENNE: totPrice: ${totPrice}, ${typeof totPrice}`);
  // ^ aggiorno output
  output = totPrice;
  console.log(`MINORENNE: output: ${output}, ${typeof output}`);
}

// ^ SE l'età dell'utente è MAGGIORE di 65 anni
else if (age > 65) {
  const discountPercentage = 40;
  // ^ applico sconto 40%
  totPrice = totPrice - totPrice * (discountPercentage / 100);
  console.log(`OVER 65: totPrice: ${totPrice}, ${typeof totPrice}`);
  // ^ aggiorno output
  output = totPrice;
  console.log(`OVER 65: output: ${output}, ${typeof output}`);
}

// ! OUTPUT

// ^ STAMPO output in forma umana (max 2 decimali)
alert(`${output.toFixed(2)}€`);
