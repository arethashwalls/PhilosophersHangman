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

function checkWin(answer, guess) {//Check current guess against correct answer
    if(removeWhitespace(answer) === removeWhitespace(guess)) {//Guess should already be lowercase!
        return true;
    } else {
        return false;
    }
}
function checkLose(lettersAllowed, lettersGuessed) {
    return (lettersAllowed === lettersGuessed ? true : false);
}

function Hangman(answer) {
    this.answer = answer;
    this.wins = 0;
    this.losses = 0;
    this.lettersAllowed = removeWhitespace(this.answer).length;
    this.lettersGuessed = 0;
    this.currentLetter = '';
    this.currentGuess = '';
    this.checkWin = checkWin(this.answer, this.currentGuess);
}

var newHangman = new Hangman(getRandom(possibleAnswers));


