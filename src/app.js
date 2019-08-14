import React, { Component } from 'react';

import NormalComponent from './normal-component';
import NormalFunction from './normal-function';

import MyPure from './pure-component';
import MyMemo from './memo-function';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            let count = this.state.count + 1;
            this.setState({
              count
            });
          }}
        >
          Counter
        </button>
        <label>{this.state.count}</label>
        <NormalComponent />
        <NormalFunction />
        <MyPure />
        <MyMemo />
      </div>
    );
  }
}

export default App;
