import React, { Component } from 'react';
import { Navbar } from './components';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Link to='/'><h1 className='App-header'>Destin McMurry</h1></Link>
        <span className='App-subheader'>Front-End Leaning Full-Stack JavaScript Developer</span>
        <Navbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;