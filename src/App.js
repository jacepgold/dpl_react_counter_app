import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter Example</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
