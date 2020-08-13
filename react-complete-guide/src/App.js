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
    ],
    otherState: 'hello world!',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // this.state.persons[0].name = 'John Doe'  // don't do this!
    // setState is a method provided by the Component class extension
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Jane', age: 29 },
        { name: 'Jake', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'John', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Jake', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    // inline styles below these will be scoped to this component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      // since "class" is a reserved name in javascript react cannot use class as an attribute name for styling classes
      <div className="App">
        <h1>Hello from react app!</h1>
        <p>It's working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* to conditionally render data we use a turnery statement and return null if the statement is not true */}
        { this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            {/* to call a function with arguments the .bind() method is used passing this and the arguments to be passed. */}
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'John Doe')}
              changed={this.nameChangedHandler} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>My Hobbies: Racing</Person>
          </div> : null
        }
      </div>
    );
    // below can be used to render a component but since none is defined we can use div instead
    // second argument is config, all fallowing arguments are nested each one being nested inside
    // ultimately the code above will look like the code below
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello from react app!'))
  }
}

export default App;
