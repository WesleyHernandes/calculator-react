import './App.css';
import React, { Component } from 'react'

import Display from './display/Display'
import Panel from './panel/Panel'

const initialState = {
  displayValue:'0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

export default class App extends Component {
  state = { ...initialState }

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = (operation) => {
    console.log(operation)
  }

  setDigit = (value) => {
    if(value === '.' && this.state.displayValue.includes('.')){
      return
    }
  }

  render(){
    return (
      <div className="App">
        <div className="Calculator">
          <Display value={this.state.displayValue} />
          <Panel 
            clearMemory={() => this.clearMemory()} 
            setOperation={() => this.setOperation()} 
            setDigit={() => this.setDigit()} 
          />
        </div>
      </div>
    )
  }
}