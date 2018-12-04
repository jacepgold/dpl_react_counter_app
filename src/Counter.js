import React from 'react';

class Counter extends React.Component {
  // New way of doing state
  state = { value: 0 }

  inc = () => {
    this.setState({ value: this.state.value + 1, })
  }

  dec = () => {
    this.setState({ value: this.state.value - 1, })
  }

  render() {
    const { name, } = this.props; // This gets the data in the props
    const { value } = this.state; // This gets the current state of the app
    return(
      <div style={{ backgroundColor: name, color: 'white', }}>
        <p>{ name } counter</p>
        <p>{ value }</p>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default Counter;