import React, { Component } from 'react';
import NavBar from './components/navbar';
// import './App.css';

import Counters from './components/counters';


class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    //use filter to get all array objects where the id is not the received counterId
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); //Same as "this.setState({ counters:counters }); because the names are the same

    console.log("Event Handler Called", counterId);
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
      <main className="">
       <Counters counters={this.state.counters} onReset = {this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
       </main>
       </React.Fragment>
    );
  }
}

export default App;
