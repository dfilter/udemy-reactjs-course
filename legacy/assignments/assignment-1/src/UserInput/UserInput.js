import React from 'react'

const userInput = (props) => {
  const styles = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }
  return (
    <div>
      <input type="text" onChange={props.usernameChange} value={props.username} style={styles}></input>
    </div>
  )
}

export default userInput
