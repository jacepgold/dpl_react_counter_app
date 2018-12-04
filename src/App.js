import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter Example</h1>
        { /* Each <Counter /> is a new instance of the class */ }
        <Counter name="red" />
        { /* name="something" = a prop to send data to it */ }
        <Counter name="green" />
        <Counter name="blue" />
        <Counter name="purple" />
      </div>
    );
  }
}

export default App;
