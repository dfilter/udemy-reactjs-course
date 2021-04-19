import React, { Component } from 'react';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    users: ['johndoe', 'janedoe', 'jakedoe']
  }

  usernameHandler = (event) => {
    this.setState({
      users: ['johndoe', event.target.value, 'jakedoe']
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput usernameChange={this.usernameHandler} username={this.state.users[1]}></UserInput>
        <UserOutput username={this.state.users[0]}></UserOutput>
        <UserOutput username={this.state.users[1]}></UserOutput>
        <UserOutput username={this.state.users[2]}></UserOutput>
      </div>
    );
  }
}

export default App;
