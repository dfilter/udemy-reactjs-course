// despite not invoking the React class directly we still need to import it for the component below to work
import React from 'react'
import styled from 'styled-components'

// import './Person.css'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 1 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    .Person {
        width: 450px;
    }
  }
`

// in its purest form a component is simply a function that returns jsx
// props will contain all the properties/attributes that are passed to this component
// person is considered a stateless component since it has no state useState hooks
const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  // to execute javascript inline the javascript must be wrapped in "{}"
  return (
    <StyledDiv>
      <p onClick={props.click}>I'm {props.name}, and am {props.age} years old.</p>
      {/* props.children is reserved to anything passed between component tags */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </StyledDiv>
  )
}

export default person
