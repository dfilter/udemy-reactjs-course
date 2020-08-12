import React, { Component } from 'react';
import './App.css';

class App extends Component {
  /**
   * App is the root component which all other components will be nested inside of
   */
  render() {
    return (
      // The markup below is NOT html it is jsx that ultimately compiles to js
      <div className="App">
        <h1>Hello from react app!</h1>
      </div>
    );
  }
}

export default App;
