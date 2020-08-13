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
      { id: 'ijwifghsf', name: 'John', age: 28 },
      { id: '23jhklehr', name: 'Jane', age: 29 },
      { id: 'l43khj5tr', name: 'Jake', age: 26 }
    ],
    otherState: 'hello world!',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // this approach is flawed since in js objects are reference types using spread to copy fixes this
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)  // Since persons as a reference to state splicing it will modify state. This is bad practice
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    // inline styles below these will be scoped to this component
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    // conditionally render content with an "if" statement
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* map executes a method on every given element in an array used here to create a Person component for each person in array */}
          {this.state.persons.map((person, index) => {
            // key property is a default property that allows jsx to know what was changed in the virtual DOM
            // It is best to provide key with a value that will be unique throughout the app
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      style.backgroundColor = 'red'
    }

    return (
      // since "class" is a reserved name in javascript react cannot use class as an attribute name for styling classes
      <div className="App">
        <h1>Hello from react app!</h1>
        <p>It's working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* We can render the person variable defined above here as follows: */}
        {persons}
      </div>
    );
    // below can be used to render a component but since none is defined we can use div instead
    // second argument is config, all fallowing arguments are nested each one being nested inside
    // ultimately the code above will look like the code below
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello from react app!'))
  }
}

export default App;
