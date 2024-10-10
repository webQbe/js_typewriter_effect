
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

    console.log(current);

    // call type() method every 0.5 second
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