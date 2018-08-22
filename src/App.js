import React, { Component } from 'react';
import { Navbar } from './components';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='App-header'>Destin McMurry</h1>
        <Navbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;