import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Route from './route/index.js'
import './App.scss';
import store from './store/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store = {store}>
            <Route className="main" />
        </Provider>
      </div>
    );
  }
}

export default App;
