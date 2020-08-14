import React, { Component } from 'react'

import classes from './App.css'
import Person from '../components/Persons/Person/Person'

class App extends Component {
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
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
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
    let persons = null
    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      btnClass = classes.Red
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hello from react app!</h1>
        <p className={assignedClasses.join(' ')}>It's working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App
