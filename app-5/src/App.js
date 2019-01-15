import React, { Component } from 'react';
import './App.css';

import Image from './Component/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://www.catster.com/wp-content/uploads/2016/05/catster-kitten-rescue-HERO.jpeg'}/>
      </div>
    );
  }
}

export default App;
