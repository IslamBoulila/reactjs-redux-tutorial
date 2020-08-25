import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect} from 'react-redux';

class Counter extends Component {
 

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />

                <hr/>
            <button  onClick={this.props.onStore} >Store results</button>
            <ul>
                {this.props.results.map( result=>
                         <li key={result.date}  onClick={()=>this.props.onDelete(result.date)} >Value: {result.value}</li>) 
                }
               
            </ul>
            </div>
          
        );
    }
}




const mapStateToProps= state =>{
    return{
        ctr:state.counter,
        results : state.results,
    }
};
const mapDispatchToProps = dispatch=>{
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    
       onDecrementCounter:  () => dispatch( { type:'DECREMENT'}),
        onAddCounter:  () => dispatch( { type:'ADD', payload:{value:5} }),
        onSubCounter:  () => dispatch( { type:"SUB", payload:{value:5} }),

        onStore:        ()=> dispatch({type:'STORE'}),
        onDelete:    (date)=> dispatch(  {type:'DELETE'  ,  payload:{iresultId:date} } )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);