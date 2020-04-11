/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(chosenPhrase) {

        this.chosenPhrase = chosenPhrase.toLowerCase();
        console.log(this.chosenPhrase)


    }
    /** 

    addPhraseToDisplay() {

        var splitT = this.phrases.split(""); //Calling the split on the phrases

        var letters = splitT.forEach(letter => {

            if (letter.value == ! " ") {
                var liLetter = '<li>' + letter + '</li>';
                letter.setAttribute("class", "hide letter");
                document.getElementById("phrase").firstElementChild(letter).appendChild(liLetter);



            }

            else {

                var liSpaces = '<li>' + letter + '</li>';
                letter.setAttribute("class", "hide spaces");
                document.getElementById("phrase").firstElementChild(letter).appendChild(liSpaces);

            }



        });

    }

    checkLetter() {

        if (//does game represent the user input?  game.value === phrase.value
        ) {


        }

    }



    showMatchedLetter() {

        toBeMatched = document.querySelectorAll(".phrase li");


        game.forEach(userInput => {

            if (game.className === toBeMatched) { //meaning that game = user input

                userInput.setAttribute("class", "show");






            }

        }


    }





*/


}



