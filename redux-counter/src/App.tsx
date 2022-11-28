import React, { useState } from 'react';
import './App.css';
import { useAppDispatch, userAppSelector } from './app/hooks';
import { amountAdded, incremented } from './features/counter/CounterSlice';

function App() {
  const count = userAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };

  return (
    <div className="App">
      <div className="card">
        <h3>
          <code>Counter Using Redux</code>
        </h3>
        <button onClick={handleClick}>count is {count}</button>
        <p>
          <code>jeikudev</code>
        </p>
      </div>
    </div>
  );
}

export default App;
