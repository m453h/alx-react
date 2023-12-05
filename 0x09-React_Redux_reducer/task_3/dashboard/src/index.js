import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from "./reportWebVitals";
import uiReducer from "./reducers/uiReducer";
import {applyMiddleware, createStore, compose} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
