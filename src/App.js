import React, { Component } from 'react';
import { Navbar, Footer } from './components';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Link to='/'><h1 className='App-header'>Destin McMurry</h1></Link>
        <span className='App-subheader'>Full-Stack JavaScript Developer</span>
        <Navbar/>
        <Routes/>
        <Footer />
      </div>
    );
  }
}

export default App;