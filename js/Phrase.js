/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {

        this.phrase = phrase.toLowerCase();
        console.log("test");


    }


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

}
