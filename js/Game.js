/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

    constructor() {


        this.missed = 0;
        this.possiblePhrases = ["ABC", "DEF", "Game Test", "New Game", "Can non"];
        this.activePhrase = null;
      




    }


    getRandomPhrase() {

 return this.possiblePhrases[Math.floor(Math.random() * this.possiblePhrases.length)];
 
    }
    

    startGame() {

        const overLay = document.getElementById("overlay"); 
        overLay.style.display = "none";

        this.activePhrase = this.getRandomPhrase(); //Setting the this.getRandomPhrase to the varibale

      /*  
        const addRandomPhraseToDisplay = addPhraseToDisplay(getRandomPhrase); //creating a nested function //Error here addPhraseToDisplay is not defined
        this.activePhrase.addRandomPhraseToDisplay; //setting the activePhraseParameter to the addRandomPhrase
        */

    }

    


    handleInteraction(e) {

     
        var key = e.key;
      console.log(key);

    }


  
 

    }

