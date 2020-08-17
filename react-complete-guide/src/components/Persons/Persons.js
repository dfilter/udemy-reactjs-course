import React, { PureComponent } from 'react'

import Person from './Person/Person'

/**
 * PureComponent will check all passed props for changes in order to determine if the component should re-render.
 * This is similar to shouldComponentUpdate below that has been commented out.
 */
class Persons extends PureComponent {
  // initial state is undefined therefor redundant
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props, state)
  //   return state
  // }

  // Deprecated
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState)
  //   return (
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked
  //   )
  // }

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
