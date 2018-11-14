# Philosopher's Hangman

A game of hangman featuring a gaggle of dead over-thinkers.

The bulk of the game's features can be found in assets/javascript/game.js. 

The game uses an object-oriented approach. 

First, I create an array of all possible philosophers (each an object with a name, a quote, and a clue) and grab the elements from my HTML that I'll need later. Then, I defined three helper-methods to replace some repeated or tricky-to-read code that came up during development:

* **getRandom** picks one random philosopher from the array.
* **removeWhitespace** uses regex replacement to remove whitespace. This was useful when comparing guesses and answers.
* **setLetterAt** gets around string immutability and lets me change one letter at a time. I use this to update my guess. The code came from [here](https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript).

Next, I define the Hangman object itself. To allow the object to carry over properties from previous instances (which I need in order to keep track of wins, losses, and old answers), it takes three parameters: *previousName*, *wins*, and *losses*. Hangman ahs the following parameters:

* **Hangman.philosopher** is a random object picked from the *possiblePhilosophers* array, storing a name, quote, and hint.
* **Hangman.wins** and **Hangman.losses** track the *total* wins and losses across *all* games.
* **Hangman.badGuesses** tracks how many times the user has guessed incorrectly. It's initialized at 0.
* **Hangman.letter** tracks the most recently guessed letter.
* **Hangman.guess** tracks the full guess, including '-'s for unguessed characters.
* **Hangman.allLetters** tracks all letters guessed in chronological order, including bad guesses, with no repeats.

I then add methods to the Hangman prototype:

* **Hangman.setGuess()** retuns the string of dashes that represents the censored answer using a regex replace.
* **Hangman.checkWin()** returns a boolean representing whether or not the player has just won the game.
* **Hangman.checkLoss()** returns a boolean representing whether or not the player has just lost the game.
* **Hangman.updateGuess()** copies the current guess. If the player's letter is in the answer, I use the *setLetterAt* function to update the guess everywhere that it appears and return the altered guess. If not, I return the original guess and increment *Hangman.badGuesses*.
* **Hangman.updateDom(bubbleText)** wraps all of my DOM changes in one function. It has no return statement. The single parameter, *bubbleText*, is used to set the text that appears in Dr. Stickman's thought bubble, which varies depending on where you are in the game.
* **Hangman.updateAllLetter()** copies *Hangman.allLetters* and, if the player hasn't already guessed the letter, adds it to the list of already guessed letters. The first letter is handled a little differently to avoid puting a blank space at the beginning of the string. If there's a new letter, the altered copy is returned. If not, *Hangman.allLetters* is returned.
* **Hangman.setupNewGame()** just wraps *Hangman.setGuess()* and *Hangman.updateDOM* together, as the game restarts in three places and I found this a bit more readable.

Finally, the game itself begins!

* **Lines 314-315** begin a new game.
* **Lines 317-318** set up my event listener and use a regex test to ignore all non-letters.
* **Lines 319-321** update Hangman based on the key pressed.
* **Lines 322-329** check for victory. If the player has won, a special victory message is displayed and a fresh game is created.
* **Lines 330-337** check for defeat. If the player has lost, a special defeat message is displayed and a fresh game is created.
* **Lines 338-345** update the Dr. Stickman's thought bubble based on the number of bad guesses mid-game. And then it's just closing brackets!




Created for UA Codiung Bootcamp.
