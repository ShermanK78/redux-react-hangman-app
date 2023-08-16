// Action creator to update the word
export const updateWord = (word) => ({
  type: 'UPDATE_WORD',        // Action type
  payload: word,              // Payload containing the updated word
});

// Action creator to make a guess
export const makeGuess = (letter) => ({
  type: 'MAKE_GUESS',         // Action type
  payload: letter,            // Payload containing the guessed letter
});

// Action creator to restart the game
export const restartGame = (newWord) => ({
  type: 'RESTART_GAME',      // Action type
  payload: newWord,          // Payload containing the new word for restart
});
