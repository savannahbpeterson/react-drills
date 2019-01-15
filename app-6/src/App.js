import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      toDoList: [],
      userInput: ''
    }
  }
  handleChange(value){
    this.setState({
      userInput: value
    })
  }
  addToDo(){
    
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange = {(e) => this.handleChange(e.target.value)}></input>
        <button onClick = {() => this.addToDo (this.state.toDoList)}>Add</button>
      </div>
    );
  }
}

export default App;
