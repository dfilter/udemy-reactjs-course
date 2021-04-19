import React, { Component } from 'react';

import Char from './Char/Char'
import Validation from './Validation/Validation'

import './App.css';

class App extends Component {
  state = {
    charArray: [],
    userInput: '',
    userInputLength: 0,
  }

  inputChangeHandler = (event) => {
    const userInput = event.target.value
    const charArray = userInput.split('')
    this.setState({
      charArray,
      userInput,
      userInputLength: userInput.length
    })
  }

  removeCharHandler = (index) => {
    const charArray = [ ...this.state.charArray ]
    charArray.splice(index, 1)
    const userInput = charArray.join('')
    this.setState({
      charArray,
      userInput,
      userInputLength: userInput.length
    })
  }

  render() {
    const charList = this.state.charArray.map((char, index) => {
      const charKey = char + index
      return <Char key={charKey} char={char} removeChar={() => this.removeCharHandler(index)} />
    })
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation textLength={this.state.userInputLength} />
        {charList}
      </div>
    );
  }
}

export default App;
