import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Old way of creating state, but not wrong
  constructor(props) {
    super(props); // Inherit props
    this.state = { value: 0 } // Create data in state
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState({ value: this.state.value + 1, });
  }

  dec() {
    this.setState({ value: this.state.value - 1, });
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
