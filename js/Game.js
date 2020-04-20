/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {


    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = [

            new Phrase("Ha ppi ness"),

            new Phrase("Jo y"),

            new Phrase("High Vibe s"),

            new Phrase("blEsSings")
        ];





        this.activePhrase = null;



    }
    createPhrases() {


    }


    startGame() {

        /*

The`startGame()` method hides the start screen overlay(the`div` element with an`id` of
    `overlay`), calls the`getRandomPhrase()` method to select a Phrase object from the Game
object’s array of phrases, and then adds the phrase to the gameboard by calling the
    `addPhraseToDisplay()` method(which is a method on the Phrase class) on the selected Phrase
object.The selected phrase should be stored in the Game’s`activePhrase` property, so it can be
easily accessed throughout the game.

*/

        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";

        var getRandomPhrase = this.getRandomPhrase(); //getting a random pharse and using a encapsulation
        this.activePhrase = getRandomPhrase; //storing this in the active phrase, such that it can be used, as it is part of the constructor

        this.activePhrase.addPhraseToDisplay(); //adding the activePhrase just assigned to the addPhraseToDisplay()


    }

    keyboardClick() {


    }

    getRandomPhrase() {


        var randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    checkForWin() {

     return  phrase.actualPhrase.filter(phrase => phrase.className = "show");


    }

}

     /*

    removeLife() {

       
        const scoreBoard = document.getElementById("scoreboard");

        for (var i = 0; i < scoreBoard.length; i++) {

            this.missed + 1;

            scoreBoard[i].src = "lostHeart.png";
        }

        if (this.missed > 5) {


            gameOver()

        }
        }


    }

}

*/