//An array containing all possible answers:
var possibleAnswers = [
    {name: 'plato', 
        clue1: 'His name might actually have been a nickname meaning "broad".',
        clue2: 'Objects as we see them were mere echoes of a perfect template.',
        clue3: '"We\'re just friends! My feelings are purely _____nic."'},
    {name: 'aristotle',
        clue1: 'His most famous pupil was a great guy.',
        clue2: 'Virtue lies in balance. Courage balances cowardice and foolishness.',
        clue3: 'Does not rhyme with Chipotle, though that\'d be pretty funny.'}, 
    {name: 'epicurus',
        clue1: 'May have been the first to formulate the problem of evil.',
        clue2: 'The root of suffering is mankind\'s irrational fear of death.',
        clue3: 'Despite recomending a bland diet, a synonym for "gourmet" was derived from his name.'},  
    {name: 'diogenes',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'cicero',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'zeno',
    clue1: '',
    clue2: '',
    clue3: ''},
    {name: 'marcus aurelius',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'augustine',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'thomas aquinas',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'william of ockham',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'averroes',
    clue1: '',
    clue2: '',
    clue3: ''},  
    {name: 'baruch spinoza',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'gottfried leibniz',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'john locke',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'david hume',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'francis bacon',
    clue1: '',
    clue2: '',
    clue3: ''},  
    {name: 'thomas hobbes',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'john stuart mill',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'jeremy bentham',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'jean-jacques rousseau',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'voltaire',
    clue1: '',
    clue2: '',
    clue3: ''},  
    {name: 'karl marx',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'immanuel kant',
    clue1: '',
    clue2: '',
    clue3: ''},  
    {name: 'georg wilhelm friedrich hegel',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'arthur schopenhauer',
    clue1: '',
    clue2: '',
    clue3: ''},  
    {name: 'soren kierkegaard',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'friedrich nietzsche',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'jean-paul sartre',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'simone de beauvoir',
    clue1: '',
    clue2: '',
    clue3: ''},  ,
    {name: 'bertrand russel',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'ludwig wittgenstein',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'hanah arendt',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'fyodor dostoevsky',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'george boole',
    clue1: '',
    clue2: '',
    clue3: ''},  
    {name: 'judith butler',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'noam chomsky',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'michel foucault',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'ayn rand',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'derek parfit',
    clue1: '',
    clue2: '',
    clue3: ''},   
    {name: 'karl popper',
    clue1: '',
    clue2: '',
    clue3: ''},  
    {name: 'robert nozick',
    clue1: '',
    clue2: '',
    clue3: ''},];//May update this to an object with answers and clues?

/*DOM variables*****************************************************************/
var showWins = document.getElementById('wins'),
    showLosses = document.getElementById('losses'),
    showHint = document.getElementById('bubble-text'),
    showGuess = document.getElementById('guess'),
    showAllLetters = document.getElementById('all-letters');

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

/*Define the Hangman object prototype with starter values**********************/
function Hangman(answer, wins, losses) {
    this.answer = answer.name;
    this.wins = wins;
    this.losses = losses;
    this.maxTurns = removeWhitespace(answer.name).length + 3;
    this.turns = 0;
    this.letter = '';
    this.guess = '';
    this.allLetters = '';
}
/*Add methods:*****************************************************************/
//Set the initial guess to a correctly formatted row of dashes:
Hangman.prototype.setGuess = function () {
    return this.answer.replace(/[a-z]/g, '-');
};
//Check if you've won:
Hangman.prototype.checkWin = function () {
    return ((removeWhitespace(this.answer) === removeWhitespace(this.guess)) ? true : false);
};
//Check if you've lost:
Hangman.prototype.checkLoss = function () {
    return ((this.turns >= this.maxTurns) ? true : false);
};
/*Update the guess. If your letter is in the answer and hasn't already been guessed,
add it at the correct index.*/
Hangman.prototype.updateGuess = function () {
    if (this.answer.indexOf(this.letter) > -1) {
        let newGuess = this.guess;
        for (let i = 0; i < this.answer.length; i++) {
            if (this.letter === this.answer[i]) {

                newGuess = setLetterAt(newGuess, i, this.letter);
            }
        }
        return newGuess;
    }
    return this.guess;
};
Hangman.prototype.updateDOM = function() {
    showWins.textContent = this.wins;
    showLosses.textContent = this.losses;
    showGuess.textContent = this.guess.toUpperCase();
    showAllLetters.textContent = this.allLetters.toUpperCase();
}

/*Set up starting conditions:****************************************************/
var hangGame = new Hangman(getRandom(possibleAnswers), 0, 0);
hangGame.guess = hangGame.setGuess();
showGuess.innerText = hangGame.guess;
/*Core game actions:*************************************************************/
document.addEventListener('keydown', (event) => {
    if (/^[a-zA-Z]$/.test(event.key)) {//Ignores all non-letters
        console.log(hangGame.answer);
        hangGame.letter = event.key.toLowerCase();
        hangGame.allLetters += hangGame.letter.toUpperCase() + " ";
        hangGame.turns++;
        hangGame.guess = hangGame.updateGuess();
        hangGame.updateDOM();
        if (hangGame.checkWin()) {
            //On a win, increment wins, remake the object preserving wins and losses.
            hangGame.wins++;
            hangGame = new Hangman(getRandom(possibleAnswers), hangGame.wins, hangGame.losses);
            hangGame.guess = hangGame.setGuess();
            hangGame.updateDOM();
        } else if (hangGame.checkLoss()) {
            hangGame.losses++;
            //On a loss, increment losses, remake the object preserving wins and losses.
            hangGame = new Hangman(getRandom(possibleAnswers), hangGame.wins, hangGame.losses);
            hangGame.guess = hangGame.setGuess();
            hangGame.updateDOM();
        }
    }
});