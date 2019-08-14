import React, { PureComponent } from 'react';

export default class MyPures extends PureComponent {
  render() {
    console.log('Pure  Component!');
    return <div>Pure</div>;
  }
}
