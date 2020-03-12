import React from 'react';
import logo from './logo.svg';
import './App.css';

import User from './components/User'
import Balance from './components/Balance'
import Transactions from './components/Transactions'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User />
        <Balance />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
