// INPUT
// Raccolta Dati
const evenOdd = prompt(" scegli pari o dispari");
const numberG = parseInt(prompt( "scegli un numero da 1 a 5"));

console.log(`Il Giocatore ha scelto ${evenOdd}`);
console.log(`Numero Giocatore: ${numberG}`)

// ESECUZIONE LOGICA
// Invoco la funzione per generare n.random del computer
const numberCpu = getNumRandom(1,5);

console.log(`Numero Computer ${numberCpu}`);

// Somma dei numeri del Giocatore e del Computer
const summ = numberG + numberCpu

// Invoco la funzione 
const evenOddSumm = isEven(summ)

console.log(`La somma è ${summ} - ${evenOddSumm}`);

// OUTPUT
// Se il valore scelto dal giocatore è uguale al valore della funzione
if (evenOdd === evenOddSumm) {
    console.log( "Il Giocatore ha vinto!")
} else{
    console.log("Il Computer ha vinto");
}





