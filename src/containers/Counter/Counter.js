import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

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
            <button  onClick={()=>this.props.onStore(this.props.ctr)} >Store results</button>
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
        ctr:state.ctr.counter,
        results : state.result.results,
    }
};
const mapDispatchToProps = dispatch=>{
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
    
       onDecrementCounter:  () => dispatch( actionCreators.decrement()),
        onAddCounter:  () => dispatch( actionCreators.add(5)),
        onSubCounter:  () => dispatch( actionCreators.sub(5)),

        onStore:        (counter)=> dispatch( actionCreators.storeResult(counter)),
        onDelete:    (date)=> dispatch(  actionCreators.deleteResult(date) )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);