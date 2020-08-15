import React,{useState, useReducer} from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer = () => {
    let [state, dispatch] = useReducer(CounterReducer, 10 )
return(
    <div>
        <h1>Value of reducer state is {state}</h1>

        <button /*onClick={() => dispatch('INCREMENT')}*/>Increase value in reducer</button>

        
        
    </div>
)

}

export default ChildReducer