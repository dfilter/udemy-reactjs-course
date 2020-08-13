import React, { useState } from 'react';
import './App.css';
// components imported must have uppercase
import Person from './Person/Person'

// App is considered a stateful component because it uses the useState hook
const app = (props) => {
  // useState() returns an array first element will always be the current state second will be a function to update the state
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'John', age: 28 },
      { name: 'Jane', age: 29 },
      { name: 'Jake', age: 26 }
    ]
  })

  const [ otherState, setOtherState ] = useState('hello world!')

  console.log(otherState)

  const switchNameHandler = () => {
    // this does not merge with old state it replaces it
    setPersonsState({
      persons: [
        { name: 'John Doe', age: 28 },
        { name: 'Jane', age: 29 },
        { name: 'Jake', age: 26 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello from react app!</h1>
      <p>It's working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing</Person>
    </div>
  );
}

export default app;
