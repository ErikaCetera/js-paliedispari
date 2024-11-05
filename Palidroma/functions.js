/**
 * Description placeholder
 *
 * @param {string} word
 * @returns {boolean}
 */

// Definizione della funzione 
function isPalidroma(word) {
//  Variabile d'appoggio per salvare la parola inversa
    let reverseWord = "";
    // Ciclo che prendere ogni lettera a partire dall'ultimo indice fino ad arrivare al primo 
    for (let i = word.length - 1; i >= 0; i--) {
        const curLetter = word[i];
        // concatena le lettere salvandole nella variabile d'appoggio
        reverseWord += curLetter
    }
    // restituisce un valore booleano confontando la parola inversa con l'originale
    return reverseWord === word;
}



