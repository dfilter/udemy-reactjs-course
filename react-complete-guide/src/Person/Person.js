// despite not invoking the React class directly we still need to import it for the component below to work
import React from 'react'

// in its purest form a component is simply a function that returns jsx
const person = () => {
  return <p>I'm a person!</p>
}

export default person
