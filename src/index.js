import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,combineReducers,applyMiddleware,compose}  from  'redux';
import {Provider } from 'react-redux';

import  counterReducer from './store/reducers/counter';
import  resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';
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

  const loggerMiddleware= store =>{
    return next => {

        return action => {
               console.log('[logger Middleware ]',action);
               //This fucntion will let the action to reache the reducer
               next(action);
               console.log('[logger Middleware ]',store.getState());
        }
    }
};
//Using redux devtools extension to follow the redux store changes and actions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create redux Store
const store= createStore(rootReducer, composeEnhancers (applyMiddleware(loggerMiddleware,thunk) ));

ReactDOM.render(

    <Provider store={store}> <App/></Provider>, document.getElementById('root'));
registerServiceWorker();
