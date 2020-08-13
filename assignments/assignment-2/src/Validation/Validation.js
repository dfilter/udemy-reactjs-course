import React from 'react'

const validationComponent = (props) => {
  let validationMessage = 'Text is too short!'
  if (props.textLength >= 5) {
    validationMessage = 'Text is long enough.'
  }
  return <p>{validationMessage}</p>
}

export default validationComponent
