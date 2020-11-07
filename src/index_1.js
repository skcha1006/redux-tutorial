import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";



const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  },
  type1: 'updateState',
  payload1: {
    updateState: 'Update State'
  }
}

const reducer = (state, action) => {
  console.log(action);
  if (action.type === 'changeState') {
    return action.payload.newState;
  }
  return 'State';
}

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//store.subscribe(() => console.log('subscribe : ', store.getState()))
const productReducer = (state = [], action) => {
  return state;
}

const userReducer = (state = '', action) => {
  if (action.type1 === 'updateState') {
    return action.payload1.updateState;
  }
  return state;
}

const allReducer = combineReducers({
  product: productReducer,
  user: userReducer
});

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);

console.log('createStore : ', store.getState());

store.subscribe(() => console.log('subscribe : ', store.getState()))



store.dispatch(action);







ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
