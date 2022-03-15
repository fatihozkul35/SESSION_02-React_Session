//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle methods are special methods built into React,used to
//* operate on components throughout their duration in the DOM.
//* For example, when the component mounts, renders, updates, or unmounts.
//* You already know the most important lifecycle method, the render method.

//* Creation of the component (constructor,
//* insertion in the DOM tree. (componentDidMount)
//* Render of the component (render)
//* (Optional) Update of the component (componentDidUpdate)
//* Death (removing from the DOM tree) of the component (componentWillUnmount)

import React from "react";

class LifeCycleMethods extends React.Component {
  //! 1-) it is invoked in the creation of component
  constructor(props) {
    console.log("Constructor is running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //! 3-) it is called when component is mounted
  //! (right after the first render).
  //! It is called only once in a lifecycle.
  componentDidMount() {
    console.log("Component mounted");
  }

  //! 4-) This method gets invoked immediately after the
  //! component is updated and re-rendered.
  //! It receives the prevState and prevProps as parameters
  //! and can also access the newly changed state or props.
  componentDidUpdate() {
    console.log("Component updated");
  }

  //! 5-) it is called before the component is removed from DOM
  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  //! 2-) it is called in every render (Drawing the component to the DOM)
  render() {
    console.log("Component Rendered");
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
