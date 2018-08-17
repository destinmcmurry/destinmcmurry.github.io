import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Destin McMurry</h1>
          <span>front-end leaning full-stack developer</span>
        </header>
        <div className='App-body'>
          <p>finally making a personal site, whoo!</p>
          <h3>but it's going to take a while...</h3>
        </div>
        <div>
          <h4>will include:</h4>
          <p>sections like *timeline* that when hovering through will expand with pictures from my insta and road to code tidbits, *tech projects* pintrips, build-a-self, happy router, wagstaff with full description of my contributions, *nontech projects* scultptures and architecture stuff, *other random internet stuff* medium post, settlers video, ford scholar post</p>
        </div>
      </div>
    );
  }
}

export default App;
