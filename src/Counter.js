import React from 'react';

class Counter extends React.Component {
  // New way of doing state
  state = { value: 0 }

  inc = () => {
    debugger
    this.setState({ value: this.state.value + 1, })
  }

  dec = () => {
    debugger
    this.setState({ value: this.state.value - 1, })
  }

  render() {
    return(
      <div>
        <p>
          { this.state.value }
        </p>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default Counter;