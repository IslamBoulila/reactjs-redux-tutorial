
import * as actionTypes from './actionTypes';

export const saveResult = (counter)=>{
    return {
        type:actionTypes.STORE_RESULT,
        payload:{
            counterValue:counter
        }
    }
};

export const storeResult = (counter)=>{
    return (dispatch,getState)=>{
        setTimeout(()=>{
            console.log(getState().ctr.counter);
            dispatch(saveResult(counter))
        },2000);
    }

};

export const deleteResult= (date)=>{
    return {
        type:actionTypes.DELETE_RESULT,
        payload:{resultId:date}
    }
    
    
}