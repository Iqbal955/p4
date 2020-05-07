/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//Reset button event listener

let game;



    
    const reset = document.getElementById("btn__reset") //event listener
reset.addEventListener("click", e => {

        game = new Game(); //creates a new game object and sets it to game

        game.restartGame();

        game.startGame(); //starts game



       
    });


          
