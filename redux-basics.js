const redux= require('redux');
const createStore=redux.createStore;

let initialState={
   counter:0,
}

//Reducer 
const rootReducer=(state=initialState,action)=>{
    let updatedState={
        ...state,
      }

    switch(action.type){

        case "INC_COUNTER":
            updatedState.counter=  state.counter+1;
            break;
        case "ADD_COUNTER":
            updatedState.counter=  state.counter+action.value;
            break;
           
    }
 
return   updatedState;
}

// Redux Store
const store=createStore(rootReducer);

//Subscription
//this function is called after each time the state is updated
store.subscribe(()=>{
    console.log('[Subscription]',store.getState());
})

//dispatches

store.dispatch({type:"ADD_COUNTER",value:10});

store.dispatch({type:"INC_COUNTER"});




