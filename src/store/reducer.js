
import * as actionTypes from '../store/actions';
const initialState={
    counter:0,
    results:[],
}

const reducer=(state=initialState,action)=>{

   switch ( action.type ) {
        case actionTypes.INCREMENT:
             return { 
               ...state,
                counter: state.counter + 1, } ;
        

        case actionTypes.DECREMENT:
            return { 
                ...state,
               counter: state.counter - 1, } ;
       
       case actionTypes.ADD:
        return { 
            ...state,
           counter: state.counter + action.payload.value, } ;
   
         case actionTypes.SUB:
        return { 
            ...state,
             counter: state.counter - action.payload.value, } ;

        case actionTypes.STORE:
            return {
                    ...state,
                    results:state.results.concat( {date:new Date(), value:state.counter} ),
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

export default reducer;