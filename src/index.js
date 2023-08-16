// Import the required modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Import your main App component
import App from "./App";

// Import the Provider component from React Redux to provide the store to your app
import { Provider } from "react-redux";

// Import the Redux store
import store from "./store/store";

// Import the function for reporting web vitals
import reportWebVitals from "./reportWebVitals";

// Create a root using ReactDOM.createRoot and target the element with id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in the Provider, passing the Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Export the reportWebVitals function
export default reportWebVitals;
