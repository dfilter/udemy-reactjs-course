import React, { Component } from 'react';
import './App.css';
// components imported must have uppercase
import Person from './Person/Person'

class App extends Component {
  /**
   * App is the root component which all other components will be nested inside of
   */
  state = {
    persons: [
      { name: 'John', age: 28 },
      { name: 'Jane', age: 29 },
      { name: 'Jake', age: 26 }
    ]
  }
  
  render() {
    return (
      // since "class" is a reserved name in javascript react cannot use class as an attribute name for styling classes
      <div className="App">
        <h1>Hello from react app!</h1>
        <p>It's working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
    // below can be used to render a component but since none is defined we can use div instead
    // second argument is config, all fallowing arguments are nested each one being nested inside
    // ultimately the code above will look like the code below
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello from react app!'))
  }
}

export default App;
