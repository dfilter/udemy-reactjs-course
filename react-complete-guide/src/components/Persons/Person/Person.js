import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Auxillary from '../../../hoc/Auxiliary'
import withClass from  '../../../hoc/withClass'
import classes from './Person.css'

/**
 * Since in jsx render can only return one expression we have some choices:
 * 1. If a wrapping element is not needed for structure or styling an array of jsx can be returned instead.
 * Don't forget the commas though!
 * 2. Auxillary can be used here as well as another way to wrap adjacent jsx. This component doesn't do anything but let us 
 * have multiple jsx elements next to one another.
 * 3. Fragment which is part of react does the same thing as Auxillary
 * 
 * To expose the prop types needed by this component we can use the prop-types library. 
 * We do this by defining them as an object on the propTypes attribute of the component class. Keys being the prop
 * and value being the type within PropTypes.
 * This feature is mainly used in development mode.
 */
class Person extends Component {

  render() {
    console.log('[Person.js] rendering...')

    return <Auxillary>
      <p key="i1" onClick={this.props.click}>I'm {this.props.name}, and am {this.props.age} years old.</p>
      <p key="i2" >{this.props.children}</p>
      <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}></input>
    </Auxillary>
  }
}

Person.propTypes = {
  age: PropTypes.number,
  changed: PropTypes.func,
  click: PropTypes.func,
  name: PropTypes.string
}

export default withClass(Person, classes.Person)
