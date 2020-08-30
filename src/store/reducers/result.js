import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';
const initialState={
   
    results:[],
}

//This is a helper method for delete case in the reducer 
const deleteResult=(state,action)=>{
    const updatedArray= state.results.filter(result=>{  return result.date!==action.payload.resultId   });
    return  updatedObject(state,updatedArray);
}

const resultReducer=(state=initialState,action)=>{

   switch ( action.type ) {

        case actionTypes.STORE_RESULT:
            return  updatedObject(state,{results:state.results.concat( {date:new Date(), value:  action.payload.counterValue} )});
           
        case actionTypes.DELETE_RESULT:
           return  deleteResult();
        
        default : return state;
    }
};

export default resultReducer;