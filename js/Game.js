/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

    constructor() {


        this.missed = 0;
        this.possiblePhrases = ["ABC", "DEF", "GameTest", "NewGame", "Cannon"];
        this.activePhrase = null;
      




    }


    getRandomPhrase() {

    const abc = this.possiblePhrases[Math.floor(Math.random() * this.possiblePhrases.length)];
        abc;
    }
    /** 

    startGame() {

        const overLay = document.getElementById("overlay");
        overLay.style.display = "none";
      const activePhrase =  addPhraseToDisplay(getRandomPhrase());


    }




    handleInteraction() {

        checkLetter()

    }


  
  */

    }

