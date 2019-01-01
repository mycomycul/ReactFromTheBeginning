import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Object destructuring to clean code of props...
    const { onReset, onAdd, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button className="btn btn-success btn-sm m-2" onClick={onAdd}>
          Add
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
