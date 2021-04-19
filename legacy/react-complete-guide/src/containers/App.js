import React, { Component } from 'react'

import classes from './App.css'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import withClass from '../hoc/withClass'
import Auxillary from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'

/**
 * To use the higher order component defined in withClass we wrap the App export at the end of the file
 * with it, passing any props we need for withClass (in this case the app class).
 * 
 * When updating state note that the state accessed may not be the latest or the state you may expect 
 * since react is in charge of when it thinks is a good time to update state. To avoid this we can pass
 * an anonymous function "() =>" to setState passing it prevState, and props. In this way we are guaranteed
 * to get the state we expect.
 *  
 * 113. Using the Context API
 * Every component that needs access to AuthContext will be wrapped with <AuthContext.Provider>
 */
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    showCockpit: true,
    persons: [
      { id: 'ijwifghsf', name: 'John', age: 28 },
      { id: '23jhklehr', name: 'Jane', age: 29 },
      { id: 'l43khj5tr', name: 'Jake', age: 26 }
    ],
    otherState: 'hello world!',
    showPersons: false,
    changedCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  // Deprecated
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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
    this.setState((prevState, props) => {
      return {
        persons,
        changedCounter: prevState.changedCounter + 1
      }
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] render')

    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
    }

    return (
      <Auxillary classes={classes.App}>
        <button onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}>Toggle Cockpit</button>
        <AuthContext.Provider 
          value={{ 
            authenticated: this.state.authenticated, 
            login: this.loginHandler 
          }}>
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler} />
            : null}
          {persons}
        </AuthContext.Provider>
      </Auxillary>
    )
  }
}

export default withClass(App, classes.App)
