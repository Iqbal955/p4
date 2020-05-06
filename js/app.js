/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//Reset button event listener




const game = new Game(); //creates a new game object and sets it to game

    
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


       
    });


          
