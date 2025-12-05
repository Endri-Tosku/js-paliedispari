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


/* function itsPalidrom(word) {

    // let letters = word.split("");

    // let reversedLetters = letters.reverse(); console.log(word);

    // let reversedWord = reversedLetters.join("");

    let reversedWord = word.split('').reverse().join('')

    console.log(reversedWord);

    if (word === reversedWord) {
        return true

    } else {
        return false

    }
}

let result = itsPalidrom(prompt("inserisci la tua parola"));

console.log(result); */





// PARI O DISPARI

const userNumber = Number(prompt(""))
const computerNumber = Math.floor(Math.random() * 5) + 1;

let somma = userNumber + computerNumber
console.log(somma);


function pariODispari (num) {
    if (num % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

console.log(pariODispari(somma));
