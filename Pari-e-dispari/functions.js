

/**
 * Description placeholder
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

// Definisco la funzione che dovrà generare un numero random
function getNumRandom(min, max){
  const numRandom = Math.floor(Math.random()* (max - min + 1) + min);
  return numRandom;
}

/**
 * Description placeholder
 *
 * @param {number} summ
 * @returns {string}
 */

// Definisco la funzione
function isEven(summ){
    let result= "";
    if( summ % 2 === 0){
        result = ("pari");
    } else {
        result = ("dispari");
    }
     return result;
}