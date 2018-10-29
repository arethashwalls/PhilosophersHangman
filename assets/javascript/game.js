//An array containing all possible answers:
var possibleAnswers = ['plato', 'aristotle', 'epicurus', 'diogenes', 'cicero', 'zeno',
 'marcus aurelius', 'augustine', 'thomas aquinas', 'william of ockham', 'averroes', 
 'al farabi', 'avicenna', 'confucius', 'laozi', 'niccolo machiavelli', 'rene descartes',
 'baruch spinoza', 'gottfried leibniz', 'john locke', 'david hume', 'francis bacon',
 'thomas hobbes', 'john stuart mill', 'jeremy bentham', 'jean-jacques rousseau', 'voltaire',
 'karl marx','immanuel kant', 'georg wilhelm friedrich hegel', 'arthur schopenhauer',
 'soren kierkegaard', 'friedrich nietzsche', 'jean-paul sartre', 'simone de beauvoir',
 'bertrand russel', 'ludwig wittgenstein',  'hanah arendt', 'fyodor dostoevsky', 'george boole',
 'judith butler', 'noam chomsky', 'michel foucault', 'ayn rand', 'derek parfit', 'karl popper',
  'robert nozick'];//May update this to an object with answers and clues?

/*Helper functions:*************************************************************/
//Helper function for picking a random array component
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//Helper function to trim whitespace
function removeWhitespace(string) {
    return string.replace(/\s+/g, '');
}
//Set a letter at a specific index of a string
function setLetterAt(string, index, letter) {
    return string.substr(0, index) + letter + string.substr(index + 1);
}
/*********************************************************End helper functions*/

/*Define the Hangman object prototype with starter values**********************/
function Hangman(answer, wins, losses) {
    this.answer = answer;
    this.wins = wins;
    this.losses = losses;
    this.maxTurns = removeWhitespace(answer).length + 3;
    this.turns = 0;
    this.letter = '';
    this.guess = '';
}
/*Add methods:*****************************************************************/
//Set the initial guess to a correctly formatted row of dashes:
Hangman.prototype.setGuess = function() {
    return this.answer.replace(/[a-z]/g , '-');
};
//Check if you've won:
Hangman.prototype.checkWin = function() {
    return ((removeWhitespace(this.answer) === removeWhitespace(this.guess)) ? true : false);
};
//Check if you've lost:
Hangman.prototype.checkLoss = function() {
    return((this.turns >= this.maxTurns) ? true : false);
};
/*Update the guess. If your letter is in the answer and hasn't already been guessed,
add it at the correct index.*/
Hangman.prototype.updateGuess = function() {
    if(this.answer.indexOf(this.letter) > -1){
        let newGuess = this.guess;
        for(let i = 0; i < this.answer.length; i++) {
            if(this.letter === this.answer[i]){
                
                newGuess = setLetterAt(newGuess, i, this.letter);
            }
        }
        return newGuess;
    }
    return this.guess;
};
/*********************************************End Hangman oject construction*/

var hangGame = new Hangman(getRandom(possibleAnswers), 0, 0);
hangGame.guess = hangGame.setGuess();
console.log(hangGame);

document.addEventListener('keydown', (event) => {
    hangGame.letter = event.key.toLowerCase();
    hangGame.turns++;
    hangGame.guess = hangGame.updateGuess();
    console.log(hangGame.guess);
    if(hangGame.checkWin()) {
        hangGame.wins++;
        hangGame = new Hangman(getRandom(possibleAnswers), hangGame.wins, hangGame.losses);
        hangGame.guess = hangGame.setGuess();
        console.log(hangGame);
    } else if(hangGame.checkLoss()) {
        hangGame.losses++;
        hangGame = new Hangman(getRandom(possibleAnswers), hangGame.wins, hangGame.losses);
        hangGame.guess = hangGame.setGuess();
        console.log(hangGame);
    }

});