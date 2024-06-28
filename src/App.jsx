import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo app
        </p>
      </header>
      <div className='content'>
        <Todos />       
      </div>
    </div>
    
  );
}

export default App;
