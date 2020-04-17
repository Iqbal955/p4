/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//Reset button event listener
const reset = document.getElementById("btn__reset");
reset.addEventListener("click", e => {





});


//Keyboard eventlistener
const lettersonKeyboard = document.getElementById("qwerty").addEventListener("click", (e) => {





});

const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.actualPhrase}`);

const game = new Game();
game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.actualPhrase}`);
});
