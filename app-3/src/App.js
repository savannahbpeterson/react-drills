import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }
  handleChange(filter){
    console.log('it works')
    this.setState({
      filterSting: filter
    })
  }
  render() {
    let displayFoods = this.state.foods.filter((element, index) => {
      return element.includes(this.state.filterSting)
    }).map((element, index) => {
      return  <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange = {(e) => this.handleChange(e.target.value)}></input>
        {displayFoods}
      </div>
    );
  }
}

export default App;
