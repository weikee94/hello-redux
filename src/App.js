import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button onClick={this.props.onIncrement} className="btn btn-primary mr-2">
            increase
          </button>
          <button onClick={this.props.onDecrement} className="btn btn-primary my-2">
            decrease
          </button>
        </p>
      </div>
    );
  }
}

export default App;
