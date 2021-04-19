import React from 'react'

const char = (props) => {
  const styles = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }
  return <p style={styles} onClick={props.removeChar}>{props.char}</p>
}

export default char
 