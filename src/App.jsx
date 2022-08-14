import './App.css';
import React from 'react'

import Display from './display/Display'
import Panel from './panel/Panel'

export default function App() {
  return (
    <div className="App">
      <div className="Calculator">
        <Display />
        <Panel />
      </div>
    </div>
  );
}