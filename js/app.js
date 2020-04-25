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
    const qwerty = document.querySelectorAll(".keyrow");


    //setting the class of the qwerty to key
    for (var i = 0; i < qwerty.length; i++) {
        console.log(qwerty[i]);
        qwerty[i].setAttribute("class", "key");
        qwerty[i].disabled = "false";
    }

        //setting the scoreboard to the regular heart back again
        var scoreboard = document.querySelectorAll("img");
    for (var i = 0; scoreboard.length; i++) {

            scoreboard[i].src = "images/liveHeart.png";
}

    //removing the li elements by looping through the phrase dom elements, getting the firstElementChild (ul). 
    //removing the child of it(with the phrase[i])
    var phrase = document.getElementById("phrase");
    for (var i = 0; i < phrase.Length; i++) {

        phrase.firstElementChild.removeChild(phrase.firstElementChild.childNodes[i]);







    }


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





});
