// An array of initial words for the game
const initialWords = ['ALGORITHM', 'ARRAY', 'BINARY', 'BOOLEAN', 'CACHE', 'CLASS', 'CLOUD', 'COMPILE', 'COMPUTER', 'CPU', 
  'DATA', 'DATABASE', 'DEBUG', 'DEVELOPER', 'DEVOPS', 'DOCKER', 'ENCRYPTION', 'FUNCTION', 'GITHUB', 'HASH',
  'HTML', 'HTTP', 'INHERITANCE', 'INTERNET', 'IP', 'JAVASCRIPT', 'JSON', 'KERNEL', 'LINUX', 'LOOP', 
  'MACHINE', 'MEMORY', 'NETWORK', 'NODEJS', 'OBJECT', 'OOP', 'OPERATING', 'PACKET', 'PARAMETER', 'PHP',
  'POLYMORPHISM', 'PROCESS', 'PROTOCOL', 'PYTHON', 'QUEUE', 'REACT', 'RECURSION', 'REDUX', 'REGEX', 'ROUTER', 
  'SCRIPT', 'SECURITY', 'SERVER', 'SOFTWARE', 'STACK', 'STRING', 'SWITCH', 'SYNTAX', 'THREAD', 'TOKEN', 
  'UI', 'UX', 'VARIABLE', 'VIRTUAL', 'VLAN', 'VSCODE', 'WEB', 'WEBSOCKET', 'WIRELESS', 'XML', 
  'YAML', 'API', 'BACKEND', 'BANDWIDTH', 'BIGDATA', 'BIT', 'BLOCKCHAIN', 'BOOTSTRAP', 'BUFFER', 'BYTE', 
  'C', 'CACHE', 'CHAR', 'CLIENT', 'COMPILER', 'CONCURRENCY', 'CONTAINER', 'CYBERSECURITY', 'DEBUGGER', 'DESIGN', 
  'DNS', 'ETHERNET', 'FIREWALL', 'FRAMEWORK', 'FRONTEND', 'FULLSTACK', 'GRAPHQL', 'HASHMAP', 'HTTP2', 'INTERFACE'];

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
