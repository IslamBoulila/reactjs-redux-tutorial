
const initialState={
    counter:0,
    results:[],
}

const reducer=(state=initialState,action)=>{

   switch ( action.type ) {
        case 'INCREMENT':
             return { 
               ...state,
                counter: state.counter + 1, } ;
        

        case 'DECREMENT':
            return { 
                ...state,
               counter: state.counter - 1, } ;
       
       case 'ADD':
        return { 
            ...state,
           counter: state.counter + action.payload.value, } ;
   
         case 'SUB':
        return { 
            ...state,
             counter: state.counter - action.payload.value, } ;

        case 'STORE':
            return {
                    ...state,
                    results:state.results.concat( {date:new Date(), value:state.counter} ),
                };
        case 'DELETE':
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