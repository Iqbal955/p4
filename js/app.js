/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * Testing the new objects
 * */
//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);


//const game = new Game();
//game.possiblePhrases.forEach((possiblePhrases, index) => {
  //  console.log(`Phrase ${index} - phrase: ${possiblePhrases}`);
//});


const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase);
phrase.addPhraseToDisplay();
phrase.addPhraseToDisplay();
phrase.addPhraseToDisplay();



/*const game = new Game(); Testing the StartGame function
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.possiblePhrases}`);
*/



//const game;
document.getElementById('btn__reset').addEventListener("click",function()  {

   const game = new Game();
    game.startGame();





});



//adding the event listener for the buttons

document.addEventListener("click", function (e) {

    e.handleInteraction();


});

/*
const getPhrases = (possiblePhrases) => {
    console.log("Possible phrase " + possiblePhrases);
    }
    const game = new Game();
    getPhrases(game.getRandomPhrase());
    getPhrases(game.getRandomPhrase());
    getPhrases(game.getRandomPhrase());



    //const phrase = new Phrase('Life is like a box of chocolates');
    //console.log(`Phrase - phrase: ${phrase.phrase}`);


    //const game = new Game();
    //game.possiblePhrases.forEach((possiblePhrases, index) => {
    //console.log(`Phrase ${index} - phrase: ${possiblePhrases}`);
    //});


    //var nextPhrase = new Phrase(game.possiblePhrases[0]);
    //console.log(nextPhrase);


    //game.getRandomPhrase();

    /** 
    const game;
    document.getElementById("btn_reset").addEventListener("click", function() {
    
        game = new Game;
        game.startGame();
    
    
    
    
    
    
    
    
    });
    
}*/
