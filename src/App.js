import React,{useState} from 'react';
import Message from './Message';
import CounterContext from './CounterContext';

import './App.css';


function App() {

let[count, setCount] = useState(10);
  return (
    <div>
      <CounterContext.Provider value={count}>
     <Message count={count}/>     
     </CounterContext.Provider>

      <button onClick=
      {
        () =>setCount(count+1)
      }>
        Update Counter       
      </button>     

         { /*isMorning ? 'Yes':'No' */}     

    </div>
  );
}

export default App;
