// Import the createStore function from Redux library
import { createStore } from 'redux';

// Import the reducer you defined
import reducer from './reducer';

// Create a Redux store using the imported reducer
const store = createStore(reducer);

// Export the created Redux store for use in your application
export default store;
