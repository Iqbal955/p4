/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

var game;

//Reset button event listener
const reset = document.getElementById("btn__reset");
reset.addEventListener("click", e => {

    game = new Game();
    game.startGame();

    /*
    Remove all`li` elements from the Phrase`ul` element.
    ● Enable all of the onscreen keyboard buttons and update each to use the`key` CSS class,
    and not use the`chosen` or`wrong` CSS classes.
    ● Reset all of the heart images(i.e.the player's lives) in the scoreboard at the bottom of
the gameboard to display the`liveHeart.png` image.


*/


    var wrong = document.getElementsByClassName("wrong");
    var chosen = document.getElementsByClassName("chosen");


    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = false);


    

   



    for (var i = 0; i < wrong.length; i++) {

        wrong[i].classList.remove("wrong");
      
 
    }

    for (var i = 0; i < chosen.length; i++) {

        chosen[i].classList.remove("chosen");




    }






  

  

        //setting the scoreboard to the regular heart back again


    //removing the li elements by looping through the phrase dom elements, getting the firstElementChild (ul). 
    //removing the child of it(with the phrase[i])
    //setting the scoreboard to the regular heart back again
    var scoreboard = document.querySelectorAll("img");
    scoreboard.forEach((heart) => (heart.src = "images/liveHeart.png"));

 
   

    //removing the li elements by looping through the phrase dom elements, getting the firstElementChild (ul). 
    //removing the child of it(with the phrase[i])
    var phraseButtons = document.getElementById("phrase").firstElementChild.childNodes;
    console.log(phraseButtons);
    for (var i = 0; i < phraseButtons.length; i++) {

        phraseButtons[i].remove(phraseButtons[i]);


    }

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






