// An array of initial words for the game
const initialWords = ['HANGMAN', 'APPLE', 'COMPUTER', 'JAVASCRIPT', 'REACT'];

// Initial state of the game
const initialState = {
  word: initialWords[Math.floor(Math.random() * initialWords.length)], // Select a random word from initialWords
  guessedLetters: [],        // Array to store guessed letters
  chances: 6,                // Number of chances the player has
};

// Reducer function to handle game state changes based on actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_WORD':
      return {
        ...state,
        word: action.payload,  // Update the word with the payload
      };
    case 'MAKE_GUESS':
      return {
        ...state,
        guessedLetters: [...state.guessedLetters, action.payload], // Add the guessed letter to the array
        chances: state.chances - (state.word.includes(action.payload) ? 0 : 1), // Decrease chances based on correct or wrong guess
      };
    case 'RESTART_GAME':
      return {
        ...initialState, // Reset state to initial state
        word: initialWords[Math.floor(Math.random() * initialWords.length)], // Select a new random word for restart
      };
    default:
      return state; // Return current state if no matching action
  }
};

export default reducer; // Export the reducer for use in Redux store
