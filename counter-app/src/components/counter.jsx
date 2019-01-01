import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="row">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn col-3 btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn col-2 btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //Event Handlers

  getBadgeClasses() {
    let classes = "badge col-1 m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
