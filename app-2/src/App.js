import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }
  render() {
    let displayFoods= this.state.items.map((element, index) => {
      return (
        <h2 key = {index}>{element}</h2>
      )
    })
    return (
      <div className="App">
        {displayFoods}
      </div>
    );
  }
}

export default App;
