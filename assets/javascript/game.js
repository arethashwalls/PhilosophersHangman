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

function getRandom(array) {//Helper function for picking a random array component
    return array[Math.floor(Math.random() * array.length)];
}

function removeWhitespace(string) {//Helper function to trim whitespace
    return string.replace(/\s+/g, '');
}

function censor(answer) {//Replaces letters in answer with dashes to hide answer
    return answer.replace(/[a-z]/g , '-');
}

function setLetterAt(string, index, letter) {
    return string.substr(0, index) + letter + string.substr(index + 1);
}

function Hangman(answer, wins, losses) {
    this.answer = answer;
    this.wins = wins;
    this.losses = losses;
    this.maxTurns = removeWhitespace(answer).length + 3;
    this.turns = 0;
    this.letter = '';
    this.guess = '';
}

Hangman.prototype.setGuess = function() {
    return censor(this.answer);
}

Hangman.prototype.checkWin = function() {
    
    return ((removeWhitespace(this.answer) === removeWhitespace(this.guess)) ? true : false);
};

Hangman.prototype.checkLoss = function() {
    return (this.turns >= this.maxTurns) ? true : false;
}

Hangman.prototype.updateGuess = function() {
    for(let i = 0; i < this.answer.length; i++) {
        if((this.letter === this.answer[i]) && (this.guess[i] === '-')) {
            let newGuess = this.guess;
            console.log('hi');
            newGuess = setLetterAt(newGuess, i, this.letter);
            return newGuess;
        }
    }
    return this.guess;
}

var hangGame = new Hangman(getRandom(possibleAnswers), 0, 0);
hangGame.guess = hangGame.setGuess();
console.log(hangGame);

document.addEventListener('keydown', (event) => {
    hangGame.letter = event.key.toLowerCase;
    hangGame.turns++;
    hangGame.guess = hangGame.updateGuess();
    console.log(hangGame.guess);
    if(hangGame.checkWin()) {
        console.log("you won!")
    }
});