import React, { Component } from 'react';
import Route from './route/index.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route className="main" />
      </div>
    );
  }
}

export default App;
