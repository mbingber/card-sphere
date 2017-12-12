import React, { Component } from 'react';
import './App.css';

import createRenderer from './createRenderer';

class App extends Component {
  componentDidMount() {
    const container = document.getElementById('app');
    setTimeout(() => {
      createRenderer(container)();
    }, 0);
  }

  render() {
    return (
      <div id="app" />
    );
  }
}

export default App;
