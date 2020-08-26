
import * as actionTypes from '../actions';
const initialState={
   
    results:[],
}

const resultReducer=(state=initialState,action)=>{

   switch ( action.type ) {

        case actionTypes.STORE:
            return {
                    ...state,
                    results:state.results.concat( {date:new Date(), value:  action.payload.counterValue} ),
                };
        case actionTypes.DELETE:
              return {
                            ...state,
                            results:state.results.filter(result=>{
                                return result.date!==action.payload.resultId
                            }),
                        };
        

           /*  or 
           let results=[...state.results];
            results.push(state.counter);
            return {
                ...state,
                results:results,
            }*/

        default : return state;
    }
};

export default resultReducer;