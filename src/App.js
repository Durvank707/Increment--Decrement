import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[count, newcount] = useState(0);
  
  function decHandler(){
    newcount(count - 1);
  }

  function incHandler(){
    newcount(count+1);
  }

  function resetBtn(){
    newcount(0);
  }

  return (
  <div className='container'>
    <div className='heading'>
      Increment & decrement
    </div>
    <div className='box'>
      <button className='decrement' onClick={decHandler}> 
        -
      </button>
      <div className='number'>
        {count}
      </div>
      <button className='increment' onClick={incHandler}>
        +
      </button>
    </div>

    <button className='reset' onClick={resetBtn}>
      Reset
    </button>
  </div>
  );
}

export default App;
