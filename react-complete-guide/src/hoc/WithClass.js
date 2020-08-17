import React from 'react'

/**
 * Another example of a higher order component where we define a passed class
 * and wrap the passed child props within
 */ 
const withClass = (props) => (
  <div className={props.classes}>
    {props.children}
  </div>
)

export default withClass
