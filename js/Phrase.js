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
        var ul = document.createElement("ul");
        splitPhrase.forEach(letter => {
            
            var liLetter = document.createElement("li");



            phraseID.appendChild(ul);
            ul.appendChild(liLetter);




            liLetter.textContent = letter;
            if (letter !== " ") {

                liLetter.setAttribute("class", "hide letter");
            }

            else {

                liLetter.setAttribute("class", "space");

            }


        });

    }


    checkLetter(letter)
    {
        return this.actualPhrase.includes(letter);

    }
    

    showMatchedLetter(letter)
    {

        const allLetters = document.querySelectorAll(".letter");


        allLetters.forEach(HTMLLetter => {

            if (HTMLLetter.innerHTML === letter) {

                HTMLLetter.classList.replace("hide", "show");



            }



        });
     


        }
        


    }


    



