/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {


    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = [

            new Phrase("Joyful and Happy"),

            new Phrase("Thank you"),

            new Phrase("High Vibes"),

            new Phrase("Happy")
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

        var allLetters = document.getElementsByClassName("letter");
        var hideletter = document.querySelectorAll('li[class~="hide"]');
        console.log(hideletter);

        if (hideletter.length === 0) {
            return true;
        }
        else {
            return false;

        }

        /*
                 allLetters.forEach(letter => {
        if (letter.className.includes("show")) {


            return true;
        }

        else {


            return false;


        }

    });
    */



    }





    /**
    
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  
      */

    removeLife(gameOver) {
        var scoreboard = document.querySelectorAll("img");
        console.log(scoreboard);
        if (scoreboard[this.missed].src = "images/liveHeart.png") {

            scoreboard[this.missed].src = "images/lostHeart.png";




            this.missed += 1;


            if (this.missed >= 5) {

                game.gameOver(false);


            }

        }




    }


    restartGame() {


        var buttons = document.querySelectorAll("button");
        buttons.forEach(button => button.disabled = false);

        var phraseButtons = document.getElementById("phrase").firstElementChild;
        phraseButtons.remove();



        var wrong = document.getElementsByClassName("wrong");
        for (var i = 0; i < wrong.length; i++) {
            wrong[i].classList.remove("wrong");
        }



        var chosen = document.getElementsByClassName("chosen");
        for (var i = 0; i < chosen.length; i++) {
            chosen[i].classList.remove("chosen");
        }


        //removing the li elements by looping through the phrase dom elements, getting the firstElementChild (ul). 
        //removing the child of it(with the phrase[i])

        var scoreboard = document.querySelectorAll("img");
        scoreboard.forEach((heart) => (heart.src = "images/liveHeart.png"));

        console.log("remove function");



    }



    gameOver(gameWon) {
        // Select 'h1#game-over-message'
        const gameOver = document.querySelector('h1#game-over-message');

        // Select 'h2.title'
        const title = document.querySelector('h2.title');

        // Select 'div#overlay"
        const divOverlay = document.querySelector('div#overlay');

        // Condition check, if 'gameWon' parameter = true, 
        if (gameWon === true) {
            gameOver.innerHTML = 'You win! Well done!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'win');
            title.classList.remove('slide-in'); //removes slide animation 
            document.getElementById("btn__reset").innerHTML = "Try Again?";

        //    const game = new Game();

            game.restartGame();


        } else {
            gameOver.innerHTML = 'Sorry, better luck next time!';
            gameOver.style.display = 'block';
            gameOver.style.justifyContent = 'center';
            divOverlay.style.display = 'block';
            divOverlay.setAttribute('class', 'lose');
            title.classList.remove('slide-in'); //removes slide animation
            document.getElementById("btn__reset").innerHTML = "Try Again?";
         //   const game = new Game();
            game.restartGame();
        };

 
    };


    handleInteraction(button) {
        // Store 'button's' inner HTML value in variable
        let chosenLetter = button.innerHTML;

        // Check condition: If checkLetter() method returns true (chosen letter = letter in phrase),
        if (this.activePhrase.checkLetter(chosenLetter)) {
            // Disable keyboard button, add class 'chosen' and display matching letter
            button.disabled = true;
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(chosenLetter);

            // Check condition: If checkForWin() method returns true (game is won),
            if (this.checkForWin()) {
                this.gameOver(true);
            };

            // Else, if false (chosen letter doesn't match letter in phrase)
        }
        else {
            // Add 'wrong' class, disable keyboard button and call removeLife() method
            button.className = 'wrong';
            if (button.className === 'wrong') {
                button.disabled = true;
            };
            this.removeLife();
        };
    };

    
};
