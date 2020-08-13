// despite not invoking the React class directly we still need to import it for the component below to work
import React from 'react'
import './Person.css'

// in its purest form a component is simply a function that returns jsx
// props will contain all the properties/attributes that are passed to this component
// person is considered a stateless component since it has no state useState hooks
const person = (props) => {
  // to execute javascript inline the javascript must be wrapped in "{}"
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name}, and am {props.age} years old.</p>
      {/* props.children is reserved to anything passed between component tags */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default person
