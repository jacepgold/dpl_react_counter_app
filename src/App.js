import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // New way of doing it state
  state = { value: 0, }

  constructor(props) {
    super(props);
    this.dec = this.dec.bind(this);
  }
  
  inc = () => {
    debugger
    this.setState({ value: this.state.value + 1, })
  }

  dec() {
    debugger
    this.setState({ value: this.state.value - 1, })
  }

  render() {
    return (
      <div className="App">
        <h1>Counter Example</h1>
        <p>
          { this.state.value }
        </p>
        <button onClick={ this.dec }>-</button>
        <button onClick={ this.inc }>+</button>
      </div>
    );
  }
}

export default App;
