import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './App'
import rootReducer from './redux/reducers/rootReducer.js'
import "./index.css";
import App from "./App";

const configureStore = () => {
  const enhancer = composeWithDevTools();
  return createStore(rootReducer, enhancer);
} 

const store = configureStore

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);