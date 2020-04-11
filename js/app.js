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
const phrase = new Phrase(randomPhrase.chosenPhrase);
phrase.addPhraseToDisplay();



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
