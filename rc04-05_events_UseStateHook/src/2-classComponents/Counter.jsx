//* ====================== CLASS COMPONENTS AND STATE ======================
//* Class-Components in React are based on ES6 class structure.
//* They have a lot of boilerplate codes.
//* But, They can have the states.
//* The state is a built-in React object that is used to contain data or
//* information about the component. A component's state can change over time;
//* whenever it changes, the component re-renders.
//* We can assign an initial value for state in the constructor by this.state
//* Outside of constructor, we can change the state via setState() method.
//* =========================================================================

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0,
    };
    // * binding of increment method to the class.
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  //! Our method is not binded to the class as default,so we cant use this keyword.
  //* The methods defined by React are binded to the class as default.
  //* So, we should bind our methods to the class in the contstructor or
  //* we can use arrow function for automatic binding.

  render() {
    return (
      <div className="container text-center mt-4">
        <h1>COUNT:{this.state.count}</h1>
        <button className="btn btn-success" onClick={this.increment}>
          INCREMENT
        </button>
        <button className="btn btn-dark" onClick={this.decrement}>
          DECREMENT
        </button>
      </div>
    );
  }
}

export default Counter;
