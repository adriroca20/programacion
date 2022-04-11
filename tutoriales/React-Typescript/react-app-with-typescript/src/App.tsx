import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(5);

  const changeNumber =()=> {
    setNumber("2");
  }
  return (
    <div className="App">
    {number}
    <button onClick={changeNumber}> Change number</button>
    </div>
  );
}

export default App;
