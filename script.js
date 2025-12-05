/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



// PALIDROMA


function itsPalidrom(word) {

    let letters = word.split("");

    let reversedLetters = letters.reverse(); console.log(word);

    let reversedWord = reversedLetters.join("");

    console.log(reversedWord);

    if (word === reversedWord) {
        return true

    } else {
        return false

    }
}

let result = itsPalidrom(prompt("inserisci la tua parola"));

console.log(result);





// PARI e DISPARI