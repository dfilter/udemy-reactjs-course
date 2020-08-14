import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {
  // initial state is undefined therefor redundant
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props, state)
  //   return state
  // }

  // Deprecated
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState)
    return "Snapshot!"
  }

  render() {
    console.log('[Persons.js] rendering...')

    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)} />
    })
  }

  // Deprecated
  // componentWillUpdate() {
  //   console.log('[Persons.js] componentWillUpdate')
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', prevProps, prevState, snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')

  }
}

export default Persons
