
// txtElement: <span
// words: data-words=""
// wait: wait time (default 3000)
const TypeWriter = function(txtElement, words, wait = 3000){

    this.txtElement = txtElement;
    this.words = words;
    this.txt = ''; 
    this.wordIndex = 0; // current word / 0 by default
    this.wait = parseInt(wait, 10); // interger value of base 10
    this.type(); // main method
    this.isDeleting = false; // state of deleting typed word

}

// type() method
TypeWriter.prototype.type = function() {

    // get current index of word 
    // current = passed word index % words array length
    const current = this.wordIndex % this.words.length;

    // get full text of current word
    const fullTxt = this.words[current];

    console.log(fullTxt);

    // check if clearing or typing
    if(this.isDeleting){

        // Remove character
        // txt = whatever in the span / length is 0 at start
        this.txt = fullTxt.substring(0, this.txt.length - 1);

        // e.g.: this.txt = "Hell".substring(0, 3); // Result: "Hel"

    } else { 

        // typing
        // Add character
        this.txt = fullTxt.substring(0, this.txt.length + 1);

        // e.g.: this.txt = "Hello".substring(0, 4); // Result: "Hell"


    }

    /* The substring() method extracts a portion of a string and returns it as a new string. 
       
            string.substring(startIndex, endIndex);

            startIndex: 
            The index of the first character to include in the extracted substring.

            endIndex (Optional): 
            The index of the character to stop at (but not include). 
            If omitted, it extracts to the end of the string.
    
     */

    // insert modified txt into txtElement (span)
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;



    // run above code every 0.5 second
    setTimeout(() => this.type(), 500)
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init(){

    // get span element
    const txtElement = document.querySelector('.txt-type');

    // get words from txtElement
    // convert array to JSON
    const words = JSON.parse(txtElement.getAttribute('data-words'));

    // get delay from txtElement
    const wait = txtElement.getAttribute('data-wait');

    // Initialize TypeWriter
    new TypeWriter(txtElement, words, wait);

}