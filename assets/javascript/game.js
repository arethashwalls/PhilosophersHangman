/*******************************************************************************************************
 *  Philosopher's Hangman
 *  ---------------------
 *  
 * A JavaScript game made with love by a former philosophy student, with apologies to the three or four
 * professors who dressed *exactly* like that.
 * 
 * Lines 12-193 list possible philosophers along with their associated quotes and clues. I recognize that
 * this got *kind of* out of hand, but a large possible answer set does add replay value at least.
 * 
 * Lines 197-216 set up some DOM variables and helper functions.
 * 
 * Lines 221-305 define the Hangman object.
 * 
 * Lines 310-341 define the game loop itself. 
 * 
 * Enjoy, and don't think too hard!
 * 
*******************************************************************************************************/

//An array containing all possible philosophers:
var possiblePhilosophers = [
    {
        name: 'Plato',
        quote: 'The madness of love is the greatest of heaven\'s blessings',
        clue: '"We\'re just friends! My feelings are purely _____nic."'
    },
    {
        name: 'Aristotle',
        quote: 'Piety requires us to honor truth above our friends.',
        clue: 'His name does not rhyme with Chipotle, though that\'d be pretty funny.'
    },
    {
        name: 'Epicurus',
        quote: 'He who is not satisfied with a little, is satisfied with nothing.',
        clue: 'Despite recomending a bland diet, a synonym for "gourmet" was derived from his name.'
    },
    {
        name: 'Diogenes',
        quote: 'Other dogs bite only their enemies, whereas I bite also my friends in order to save them.',
        clue: 'He carried a lamp during the day to aid his search for an honest man.'
    },
    {
        name: 'Cicero',
        quote: 'There is nothing so absurd that it has not been said by some philosopher.',
        clue: 'He appears as a minor character in Shakespeare\'s Julius Ceasar.'
    },
    {
        name: 'Marcus Aurelius',
        quote: 'Death hangs over thee: whilst yet thou livest, whilst thou mayest, be good.',
        clue: 'He never intended to publish his meditations, so they have no official title.'
    },
    {
        name: 'Augustine of Hippo',
        quote: 'Do not seek to understand in order to believe, but believe that thou mayest understand.',
        clue: 'He is the patron saint of brewers, printers, theologians, and sore eyes.'
    },
    {
        name: 'Thomas Aquinas',
        quote: 'The greatness of the human being consists in this: that it is capable of the universe.',
        clue: 'His family had him kidnapped in attempt to prevent him from joining the Dominican Order.'
    },
    {
        name: 'William of Ockham',
        quote: 'It is pointless to do with more what can be done with fewer.',
        clue: 'Perhaps he could use some shaving cream to go with his favorite tool.'
    },
    {
        name: 'Averroes',
        quote: 'Knowledge is the conformity of the object and the intellect.',
        clue: 'He brought Aristotle back to Europe, where they had a really hard time pronouncing his name.'
    },
    {
        name: 'Avicenna',
        quote: 'I prefer a short life with width to a narrow one with length.',
        clue: 'His encyclopedia of medicine was considered authoritative for over 600 years.'
    },
    {
        name: 'Baruch Spinoza',
        quote: 'If slavery, barbarism and desolation are to be called peace, men can have no worse misfortune.',
        clue: 'Despite the success of his books, he worked as a lens grinder for most of his life.'
    },
    {
        name: 'Gottfried Leibniz',
        quote: 'Everything that is possible demands to exist.',
        clue: 'A major controvrsy broke out when Isaac Newton and him both claimed to have invented calculus.'
    },
    {
        name: 'John Locke',
        quote: 'The end of law is not to abolish or restrain, but to preserve and enlarge freedom.',
        clue: 'His writings heavily influenced the American Declaration of Independance.'
    },
    {
        name: 'David Hume',
        quote: 'Generally speaking, the errors in religion are dangerous; those in philosophy only ridiculous.',
        clue: 'He asked how we get from "is" to "ough," possibly while wearing a very silly hat.'
    },
    {
        name: 'Francis Bacon',
        quote: 'No pleasure is comparable to the standing upon the vantage-ground of truth.',
        clue: 'He\'s considered the father of the scientific method.'
    },
    {
        name: 'Thomas Hobbes',
        quote: 'In such a condition ... the life of a man [is] solitary, poor, nasty, brutish, and short.',
        clue: 'He burned some of his own writings for fear of being accused of heresy.'
    },
    {
        name: 'John Stuart Mill',
        quote: 'Better to be Socrates dissatisfied than a fool satisfied.',
        clue: 'He was a precocious child, teaching himself Greek by the age of three.'
    },
    {
        name: 'Jean-Jacques Rousseau',
        quote: 'I propose to show my fellows a man as nature made him, and this man shall be myself.',
        clue: 'He was extremely popular during the French Revolution.',
    },
    {
        name: 'Voltaire',
        quote: 'If this is the best of possible worlds, what then are the others?',
        clue: 'He often made his points with biting satire and is known best by his pen name.'
    },
    {
        name: 'Karl Marx',
        quote: 'The philosophers have only interpreted the world ... The point, however, is to change it.',
        clue: 'The revolutions he predicted came to pass, but not where he expected.',
    },
    {
        name: 'Immanuel Kant',
        quote: 'Out of the crooked timber of humanity, no straight thing was ever made.',
        clue: 'His name is fabulously easy to pun with.',
    },
    {
        name: 'Georg Wilhelm Friedrich Hegel',
        quote: 'To be aware of limitations is already to be beyond them.',
        clue: 'He\'s notoriously impossible to understand. Seriously. I don\'t get a word of it.',
    },
    {
        name: 'Soren Kierkegaard',
        quote: 'Life can only be understood backwards; but it must be lived forwards.',
        clue: 'He\'s known for blending Christianity and existentialism.'
    },
    {
        name: 'Friedrich Nietzsche',
        quote: 'Man is something to be surpassed. What have you done to surpass man?',
        clue: 'His superman was pretty different from the guy in the red cape.',
    },
    {
        name: 'Jean-Paul Sartre',
        quote: 'I exist, that is all, and I find it nauseating.',
        clue: 'One half of a famously unorthodox couple, he met his partner at the École Normale in Paris.',
    },
    {
        name: 'Simone de Beauvoir',
        quote: 'All oppression creates a state of war. And this is no exception.',
        clue: 'Her family lost their fortune in Wold War I, prompting her to seek an independent living.'
    },
    {
        name: 'Bertrand Russel',
        quote: 'Mathematics, rightly viewed, possesses not only truth, but supreme beauty.',
        clue: 'He went to prison for publically opposing World War I.',
    },
    {
        name: 'Ludwig Wittgenstein',
        quote: 'What can be said at all can be said clearly, and what we cannot talk about we must pass over in silence.',
        clue: 'His teacher Betrand Russel described him as "passionate, profound, intense, and dominating."',
    },
    {
        name: 'Hanah Arendt',
        quote: 'Political questions are far too serious to be left to the politicians.',
        clue: 'She was imprisoned by the Gestapo, and later tried to explain how ordinary people turn evil.',
    },
    {
        name: 'Fyodor Dostoevsky',
        quote: 'The more I love humanity in general, the less I love man in particular.',
        clue: 'He\'s better known as a novelist. His novels are existentialist classics.',
    },
    {
        name: 'George Boole',
        quote: 'It is not of the essence of mathematics to be conversant with the ideas of number and quantity.',
        clue: 'Either you know him or you don\'t. If you code, you\'ve heard his name.',
    },
    {
        name: 'Mary Wollstonecraft',
        quote: 'It is vain to expect virtue from women till they are in some degree independent of men.',
        clue: 'She died after giving birth to her daughter, a famous novelist who shared her name.'
    },
    {
        name: 'Michel Foucault',
        quote: 'The most defenseless tenderness and the bloodiest of powers have a similar need of confession.',
        clue: 'You can thank him for popularizing the phrase "social construct."',
    },
    {
        name: 'Ayn Rand',
        quote: 'Man\'s mind is his basic tool of survival. Life is given to him; survival is not.',
        clue: 'Her beliefs were heavily influenced by her youth in Soviet Russia.',
    },
    {
        name: 'Philippa Foot',
        quote: 'We are not conscripts in the army of virtue, but volunteers.',
        clue: 'She\'s the originator of the Trolley Problem, popular with you kids on the "internet".'
    }];

/*DOM variables*****************************************************************/
var showWins = document.getElementById('wins'),
    showLosses = document.getElementById('losses'),
    showClue = document.getElementById('bubble-text'),
    showGuess = document.getElementById('guess'),
    showAllLetters = document.getElementById('all-letters'),
    showStickman = document.getElementById('stick-figure');

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
function setLetterAt(str, index, letter) {
    return str.substr(0, index) + letter + str.substr(index + 1);
}

/*Define the Hangman object prototype with starter values**********************/
function Hangman(previousName, wins, losses) {
    this.philosopher = getRandom(possiblePhilosophers);
    while(this.philosopher.name.toLowerCase() === previousName){
        console.log('hi');
        this.philosopher = getRandom(possiblePhilosophers);
    }
    this.wins = wins;
    this.losses = losses;
    this.badGuesses = 0;
    this.letter = '';
    this.guess = '';
    this.allLetters = '';
}
/*Add methods:*****************************************************************/
//Set the initial guess to a correctly formatted row of dashes:
Hangman.prototype.setGuess = function () {
    return this.philosopher.name.toLowerCase().replace(/[a-z]/g, '—');
};
//Check if you've won:
Hangman.prototype.checkWin = function () {
    return ((removeWhitespace(this.philosopher.name.toLowerCase()) === removeWhitespace(this.guess)) ? true : false);
};
//Check if you've lost:
Hangman.prototype.checkLoss = function () {
    return ((this.badGuesses > 6) ? true : false);
};
/*Update the guess. If your letter is in the name and hasn't already been guessed,
add it at the correct index.*/
Hangman.prototype.updateGuess = function () {
    if (this.philosopher.name.toLowerCase().indexOf(this.letter) > -1) {
        let newGuess = this.guess;
        for (let i = 0; i < this.philosopher.name.length; i++) {
            if (this.letter === this.philosopher.name.toLowerCase()[i]) {
                newGuess = setLetterAt(newGuess, i, this.letter);
            }
        }
        return newGuess;
    }
    //If your guess isn't in the name, increment your bad guess count
    this.badGuesses++;
    return this.guess;
};
//This function wraps all DOM updates together. 
Hangman.prototype.updateDOM = function (bubbleText) {
    showWins.textContent = this.wins;
    showLosses.textContent = this.losses;
    showGuess.textContent = this.guess.toUpperCase();
    showAllLetters.textContent = this.allLetters.toUpperCase();
    //Using innerText allows CSS to affect bubbleText, though textContent is usually more appropriate
    showClue.innerText = bubbleText;
    //Set image to change based on the number of bad guesses
    if(this.badGuesses > 6) {
        showStickman.setAttribute('src', 'assets/images/stick-figure4.svg');
    }
    else if (this.badGuesses > 5) {
        showStickman.setAttribute('src', 'assets/images/stick-figure3.svg');
    } else if (this.badGuesses > 3) {
        showStickman.setAttribute('src', 'assets/images/stick-figure2.svg');
    } else if (this.badGuesses > 1) {
        showStickman.setAttribute('src', 'assets/images/stick-figure1.svg');
    } else {
        showStickman.setAttribute('src', 'assets/images/stick-figure.svg');
    }
}
//This updates your list of already guessed letters, preventing duplicates.
Hangman.prototype.updateAllLetter = function () {
    var newAllLetters = this.allLetters;
    //If it's the first letter, add it without a preceding space.
    if (this.allLetters.length = 0) {
        newAllLetters += this.letter.toUpperCase();
        return newAllLetters;
    }
    //If other letters are already in there, add it with a preceding space.
    else if (newAllLetters.indexOf(this.letter.toUpperCase()) === -1) {
        newAllLetters += " " + this.letter.toUpperCase();
        return newAllLetters;
    }
    return this.allLetters;
}
//This function just wraps two functions used for every new game together for DRY-ness
Hangman.prototype.setupNewGame = function () {
    this.guess = this.setGuess();
    this.updateDOM(this.philosopher.quote);
}

/*Set up starting conditions:****************************************************/
var hangGame = new Hangman('', 0, 0);
hangGame.setupNewGame();
/*Core game actions:*************************************************************/
document.addEventListener('keydown', (event) => {
    if (/^[a-zA-Z]$/.test(event.key)) {//Ignores all non-letters
        hangGame.letter = event.key.toLowerCase();
        hangGame.allLetters = hangGame.updateAllLetter();
        hangGame.guess = hangGame.updateGuess();
        if (hangGame.checkWin()) {
            //On a win, increment wins, remake the object preserving wins and losses.
            hangGame.wins++;
            hangGame.updateDOM("Ah, yes, glad you're familiar with " + hangGame.philosopher.name + ".");
            window.setTimeout(function () {
                hangGame = new Hangman(hangGame.philosopher.name, hangGame.wins, hangGame.losses);
                hangGame.setupNewGame();
            }, 5000);
        } else if (hangGame.checkLoss()) {
            //On a loss, increment losses, remake the object preserving wins and losses.
            hangGame.losses++;
            hangGame.updateDOM('Too bad... By the way, it was ' + hangGame.philosopher.name + ". Why don't you come to office hours?");
            window.setTimeout(function () {
                hangGame = new Hangman(hangGame.philosopher.name, hangGame.wins, hangGame.losses);
                hangGame.setupNewGame();
            }, 5000);
        } else if (hangGame.badGuesses >= 5) {
            hangGame.updateDOM(hangGame.philosopher.clue);
        } else {
            hangGame.updateDOM(hangGame.philosopher.quote);
        }
    }
});