import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,combineReducers}  from  'redux';
import {Provider } from 'react-redux';
import reducer from './store/reducer';
import  counterReducer from './store/reducers/counter';
import  resultReducer from './store/reducers/result';
 /**
  * 1- Importing redux root reducer from redux.js file
  * 2- create redux store
  * 3- Pass the store to a provider( helper) that help us to inject the  store in react app
  * 
  */
const rootReducer = combineReducers(
    { ctr:counterReducer,
      result:resultReducer

  } );

const store = createStore(rootReducer);

ReactDOM.render(

    <Provider store={store}> <App/></Provider>, document.getElementById('root'));
registerServiceWorker();
