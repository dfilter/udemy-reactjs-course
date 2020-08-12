import React, { Component } from 'react';
import './App.css';

class App extends Component {
  /**
   * App is the root component which all other components will be nested inside of
   */
  render() {
    return (
      <div className="App">
        <h1>Hello from react app!</h1>
      </div>
    );
    // below can be used to render a component but since none is defined we can use div instead
    // second argument is config, all fallowing arguments are nested each one being nested inside
    // ultimately the code above will look like the code below
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello from react app!'))
  }
}

export default App;
