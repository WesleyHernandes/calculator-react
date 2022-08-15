import './App.css';
import React, { Component } from 'react'

import Display from './display/Display'
import Panel from './panel/Panel'

export default class App extends Component {
  state = {
    display: ""
  }

  setDisplay = (value) => {
    this.setState({
      display: `${this.state.display}${value}`
    })
  }

  render(){
    return (
      <div className="App">
        <div className="Calculator">
          <Display operation={this.state.display} />
          <Panel setDisplay={this.setDisplay} />
        </div>
      </div>
    )
  }
}