/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {

    constructor(actualPhrase) {

        this.actualPhrase = actualPhrase.toLowerCase();

    }

    addPhraseToDisplay() {


        const phraseID = document.getElementById("phrase");
        var splitPhrase = this.actualPhrase.split("");
        splitPhrase.forEach(letter => {

            if (letter !== " ") {

                var liLetter = document.createElement("li");
                liLetter.textContent = letter;
                liLetter.setAttribute("class", "hide letter");
                phraseID.firstElementChild.appendChild(liLetter);



            }


            else {


                var liSpace = document.createElement("li");
                liSpace.textContent = letter;
                liSpace.setAttribute("class", "space");
                phraseID.firstElementChild.appendChild(liSpace);



            }


        });

    }


    checkLetter(letter) {
        return this.actualPhrase.includes(letter);

    }


    showMatchedLetter(letter) {

        const allLetters = document.querySelectorAll(".letter");


        allLetters.forEach(HTMLLetter => {

            if (HTMLLetter.innerHTML === letter) {

                HTMLLetter.classList.replace("hide", "show");



            }



        });



    }



}






