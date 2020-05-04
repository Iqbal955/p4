/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

var game;

//Reset button event listener
const reset = document.getElementById("btn__reset");
reset.addEventListener("click", e => {



    /*
    Remove all`li` elements from the Phrase`ul` element.
    ● Enable all of the onscreen keyboard buttons and update each to use the`key` CSS class,
    and not use the`chosen` or`wrong` CSS classes.
    ● Reset all of the heart images(i.e.the player's lives) in the scoreboard at the bottom of
the gameboard to display the`liveHeart.png` image.


*/

    game = new Game();

    if (game.gameOver) {


 
        var buttons = document.querySelectorAll("button");
        buttons.forEach(button => button.disabled = false);

        var phraseButtons = document.getElementById("phrase").firstElementChild;
        phraseButtons.remove();


    
        var wrong = document.getElementsByClassName("wrong");
        for (var i = 0; i < wrong.length; i++)
        {
           wrong[i].classList.remove("wrong");
        }



        var chosen = document.getElementsByClassName("chosen");
        for (var i = 0; i < chosen.length; i++)
        {
            chosen[i].classList.remove("chosen");
        }


        //removing the li elements by looping through the phrase dom elements, getting the firstElementChild (ul). 
        //removing the child of it(with the phrase[i])

        var scoreboard = document.querySelectorAll("img");
        scoreboard.forEach((heart) => (heart.src = "images/liveHeart.png"));

        game.startGame();

        

    }
  



    game.startGame();


  

        //setting the scoreboard to the regular heart back again


    //removing the li elements by looping through the phrase dom elements, getting the firstElementChild (ul). 
    //removing the child of it(with the phrase[i])
    //setting the scoreboard to the regular heart back again


 
    var scoreboard = document.querySelectorAll("img");
    scoreboard.forEach((heart) => (heart.src = "images/liveHeart.png")); 


    var letters = document.getElementById("phrase").firstElementChild.childNodes;
});

    //Keyboard eventlistener
    const lettersonKeyboard = document.getElementById("qwerty").addEventListener("click", (e) => {


        //Check condition, if clicked event has tag name button, execute handleInteraction()
        if (event.target.tagName === 'BUTTON') {
            game.handleInteraction(event.target);
        };



    });
    /*
    Remove all`li` elements from the Phrase`ul` element.
    ● Enable all of the onscreen keyboard buttons and update each to use the`key` CSS class,
    and not use the`chosen` or`wrong` CSS classes.
    ● Reset all of the heart images(i.e.the player's lives) in the scoreboard at the bottom of
    the gameboard to display the`liveHeart.png` image.
    
    
    */






