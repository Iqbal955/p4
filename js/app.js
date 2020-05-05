/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//Reset button event listener




const game = new Game(); //creates a new game object and sets it to game


function newGame() { //new game function (to be used later)
    
    const reset = document.getElementById("btn__reset") //event listener
    reset.addEventListener("click", e => {


        game.startGame(); //starts game


        //sets the scoreboard for each item to live heart.
        var scoreboard = document.querySelectorAll("img");
        scoreboard.forEach((heart) => (heart.src = "images/liveHeart.png"));


        //Keyboard eventlistener
        const lettersonKeyboard = document.getElementById("qwerty").addEventListener("click", (e) => {


            //Check condition, if clicked event has tag name button, execute handleInteraction()
            if (event.target.tagName === 'BUTTON') {
                game.handleInteraction(event.target);
            };



        });


        if (game.gameOver) { //if game.gameOver is true, the restartGame callback is called.


            restartGame()

        };

    });


            }

function restartGame() { 


    

   //the restart game callback function resets everything, once it has reset all it call the previous function, new Game

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




        newGame();







    };


newGame() //the newGame function is being called intially

    //}
