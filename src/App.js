import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter Example</h1>
        <Counter name="red" />
        <Counter name="green" />
        <Counter name="blue" />
        <Counter name="purple" />
      </div>
    );
  }
}

export default App;
