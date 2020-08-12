// despite not invoking the React class directly we still need to import it for the component below to work
import React from 'react'

// in its purest form a component is simply a function that returns jsx
const person = () => {
  // to execute javascript inline the javascript must be wrapped in "{}"
  return <p>I'm a person, and am {Math.floor(Math.random() * 30)}</p>
}

export default person
