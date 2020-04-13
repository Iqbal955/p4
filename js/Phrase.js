/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(chosenPhrase) {

        this.chosenPhrase = chosenPhrase.toLowerCase();
        console.log(this.chosenPhrase)


    }
    
    /*

Creating an element and appending its text content to li
*/


   
    addPhraseToDisplay() {

        var splitT = this.chosenPhrase.split(""); //Calling the split on the phrases

        var letters = splitT.forEach(letter => { //for each of the splitted letters

            if (letter !== " ") { //if the value is not an equal a space
                var liLetter = document.createElement("li"); //creating the li element
                liLetter.textContent = letter; //setting the text content generated from the split of the for each, that is the text content
                //og the new LI is equal to the letter
                liLetter.setAttribute("class", "hide letter"); //the newly created li is now the 
                const appendToIDandUl = document.getElementById("phrase").firstElementChild; //appending from the phrase ID to its first child that is the ul
                appendToIDandUl.appendChild(liLetter); //appending to the li




            }

            else if (letter === " ") { //if the string is an empty space, note dont get the .value since .value doesnt work on strings

                var liSpaces = document.createElement("li"); //create element
                liSpaces.textContent = letter; //appending the content of the split to the newly created li 
                liSpaces.setAttribute("class", "hide space"); //setting the li's class to hide spaces
                const appendToIDandUl = document.getElementById("phrase").firstElementChild; //rooting from phrase to the ul
                appendToIDandUl.appendChild(liSpaces); //appending the newly created li "liSpaces" to the ul

            }



        });

    }
    

    checkLetter(e) {
        console.log("click");
        
      

    }

    /*

    showMatchedLetter() {

        toBeMatched = document.querySelectorAll(".phrase li");


        game.forEach(userInput => {

            if (game.className === toBeMatched) { //meaning that game = user input

                userInput.setAttribute("class", "show");






            }

        });


    }





*/


}



