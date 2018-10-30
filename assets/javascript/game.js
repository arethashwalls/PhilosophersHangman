//An array containing all possible answers:
var possibleAnswers = [
    {name: 'plato', 
        quote: 'the madness of love is the greatest of heaven\'s blessings',
        clue: '"We\'re just friends! My feelings are purely _____nic."'},
    {name: 'aristotle',
        quote: 'Piety requires us to honor truth above our friends.',
        clue: 'His name does not rhyme with Chipotle, though that\'d be pretty funny.'}, 
    {name: 'epicurus',
        quote: 'He who is not satisfied with a little, is satisfied with nothing.',
        clue: 'Despite recomending a bland diet, a synonym for "gourmet" was derived from his name.'},  
    {name: 'diogenes',
        quote: 'Other dogs bite only their enemies, whereas I bite also my friends in order to save them.',
        clue: 'He carried a lamp during the day to aid his search for an honest man.'}, 
    {name: 'cicero',
        quote: 'There is nothing so absurd that it has not been said by some philosopher.',
        clue: 'He appears as a minor character in Shakespeare\'s Julius Ceasar.'},   
    {name: 'marcus aurelius',
        quote: 'Death hangs over thee: whilst yet thou livest, whilst thou mayest, be good.',
        clue: 'He never intended to publish his meditations, so they have no official title.'},   
    {name: 'augustine of hippo',
        quote: 'Do not seek to understand in order to believe, but believe that thou mayest understand.',
        clue: 'He is the patron saint of brewers, printers, theologians, and sore eyes.'},
    {name: 'thomas aquinas',
        quote: 'The greatness of the human being consists in this: that it is capable of the universe.',
        clue: 'His family had him kidnapped in attempt to prevent him from joining the Dominican Order.'}, 
    {name: 'william of ockham',
        quote: 'It is pointless to do with more what can be done with fewer.',
        clue: 'Perhaps he could use some shaving cream to go with his favorite tool.'},  
    {name: 'averroes',
        quote: 'Knowledge is the conformity of the object and the intellect.',
        clue: 'He brought Aristotle back to Europe, where they had a really hard time pronouncing his name.'}, 
    {name: 'avicenna',
        quote: 'I prefer a short life with width to a narrow one with length.',
        clue: 'His encyclopedia of medicine was considered authoritative for over 600 years.'},
    {name: 'baruch spinoza',
        quote: 'If slavery, barbarism and desolation are to be called peace, men can have no worse misfortune.',
        clue: 'Despite the success of his books, he worked as a lens grinder for most of his life.'},   
    {name: 'gottfried leibniz',
        quote: 'Everything that is possible demands to exist.',
        clue: 'A major controvrsy broke out when Isaac Newton and him both claimed to have invented calculus.'}, 
    {name: 'john locke',
        quote: 'The end of law is not to abolish or restrain, but to preserve and enlarge freedom.',
        clue: 'His writings heavily influenced the American Declaration of Independance.'}, 
    {name: 'david hume',
        quote: 'Generally speaking, the errors in religion are dangerous; those in philosophy only ridiculous.',
        clue: 'He asked how we get from "is" to "ough," possibly while wearing a very silly hat.'},
    {name: 'francis bacon',
        quote: 'No pleasure is comparable to the standing upon the vantage-ground of truth.',
        clue: 'He\'s considered the father of the scientific method.'},
    {name: 'thomas hobbes',
        quote: 'In such a condition ... the life of a man [is] solitary, poor, nasty, brutish, and short.',
        clue: 'He burned some of his own writings for fear of being accused of heresy.'},
    {name: 'john stuart mill',
        quote: 'Better to be Socrates dissatisfied than a fool satisfied.',
        clue: 'He was a precocious child, teaching himself Greek by the age of three.'},   
    {name: 'jean-jacques rousseau',
        quote: 'I propose to show my fellows a man as nature made him, and this man shall be myself.',
        clue: 'He was extremely popular during the French Revolution.',},   
    {name: 'voltaire',
        quote: 'If this is the best of possible worlds, what then are the others?',
        clue: 'He often made his points with biting satire and is known best by his pen name.'},  
    {name: 'karl marx',
        quote: 'The philosophers have only interpreted the world ... The point, however, is to change it.',
        clue: 'The revolutions he predicted came to pass, but not where he expected.',},   
    {name: 'immanuel kant',
        quote: 'Out of the crooked timber of humanity, no straight thing was ever made.',
        clue: 'His name is fabulously easy to pun with.',},  
    {name: 'georg wilhelm friedrich hegel',
        quote: 'To be aware of limitations is already to be beyond them.',
        clue: 'He\'s notoriously impossible to understand. Seriously. I don\'t get a word of it.',},   
    {name: 'soren kierkegaard',
        quote: 'Life can only be understood backwards; but it must be lived forwards.',
        clue: 'He\'s known for blending Christianity and existentialism.'},   
    {name: 'friedrich nietzsche',
        quote: 'Man is something to be surpassed. What have you done to surpass man?',
        clue: 'His superman was pretty different from the guy in the red cape.',},   
    {name: 'jean-paul sartre',
        quote: 'I exist, that is all, and I find it nauseating.',
        clue: 'One half of a famously unorthodox couple, he met his partner at the École Normale in Paris.',},   
    {name: 'simone de beauvoir',
        quote: 'All oppression creates a state of war. And this is no exception.',
        clue: 'Her family lost their fortune in Wold War I, prompting her to seek an independent living.'},
    {name: 'bertrand russel',
        quote: 'Mathematics, rightly viewed, possesses not only truth, but supreme beauty.',
        clue: 'He went to prison for publically opposing World War I.',},   
    {name: 'ludwig wittgenstein',
        quote: 'What can be said at all can be said clearly, and what we cannot talk about we must pass over in silence',
        clue: 'His teacher Betrand Russel described him as "passionate, profound, intense, and dominating."',},   
    {name: 'hanah arendt',
        quote: 'Political questions are far too serious to be left to the politicians.',
        clue: 'She was imprisoned by the Gestapo, and later tried to explain how ordinary people turn evil.',},   
    {name: 'fyodor dostoevsky',
        quote: 'The more I love humanity in general, the less I love man in particular.',
        clue: 'He\'s better known as a novelist. His novels are existentialist classics.',},   
    {name: 'george boole',
        quote: 'It is not of the essence of mathematics to be conversant with the ideas of number and quantity.',
        clue: 'Either you know him or you don\'t. If you code, you\'ve heard his name.',},  
    {name: 'mary wollstonecraft',
        quote: 'It is vain to expect virtue from women till they are in some degree independent of men.',
        clue: 'She died after giving birth to her daughter, a famous novelist who shared her name.'} ,
    {name: 'michel foucault',
        quote: 'The most defenseless tenderness and the bloodiest of powers have a similar need of confession.',
        clue: 'You can thank him for popularizing the phrase "social construct."',},   
    {name: 'ayn rand',
        quote: 'Man\'s mind is his basic tool of survival. Life is given to him; survival is not',
        clue: 'Her beliefs were heavily influenced by her youth in Soviet Russia.',},];

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