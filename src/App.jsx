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
    if(this.state.current === 0){
      this.setState({ operation, current:1, clearDisplay:true })
    }else{
      const equals = operation === '='
      const currentOperation = this.state.operation

      const values = [...this.state.values]

      switch(currentOperation){
        case '+': 
          values[0] = (values[0] + values[1]) 
        break
        case '-': 
          values[0] = values[0] - values[1] 
          break
        case '*': 
          values[0] = values[0] * values[1] 
          break
        case '/': 
          values[0] = values[0] / values[1] 
          break
      }

      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  setDigit = (value) => {
    if(value === '.' && this.state.displayValue.includes('.')){
      return
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? "" : this.state.displayValue
    const displayValue = currentValue + value
    this.setState({ displayValue, clearDisplay:false })

    if(value !== '.'){
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values })
    }

    console.log(this.state.values)
  }

  render(){
    return (
      <div className="App">
        <div className="Calculator">
          <Display value={this.state.displayValue} />
          <Panel 
            clearMemory={() => this.clearMemory()} 
            setOperation={(v) => this.setOperation(v)} 
            setDigit={(v) => this.setDigit(v)} 
          />
        </div>
      </div>
    )
  }
}