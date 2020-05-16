import React, { Component } from 'react';
import './App.css';

import Display from '../Components/Display/Display';
import Input from '../Components/Input/Input';

class App extends Component {
  state = {
    output: "0",
    outputDisp: true,
  }

  onClick = (button) => {
    if(button==="="){
      this.evaluateHandler();
    }
    
    else if(button==="AC"){
      this.resetHandler();
    }

    else if(button==="CE"){
      this.backspaceHandler();
    }
    else{
      let s = "";
      if(this.state.outputDisp){
        s = button;
      }
      else{
        s = this.state.output + button;
      }
      this.setState({
        output: s,
        outputDisp: false,
      }) 
    }
  }

  evaluateHandler = () => {
    try{
      /*eslint-disable no-eval */
      let s = eval(this.state.output)
      console.log("Reached Evaluation");
      this.setState({
        output: (s || "0") + "",
        outputDisp: true
      })
    } catch(e) {
      this.setState({
        output: "error",
        outputDisp: true
      })
    }
  }

  resetHandler = () => {
    this.setState({
      output: "0",
      outputDisp: true
    })
  }

  backspaceHandler = () => {
    let s = this.state.output;
    s = s.slice(0,-1);
    let bool = false;
    if(s.length===0){
      s="0"
      bool = true;
    }
    this.setState({
      output: s,
      outputDisp: bool,
    })
  }

  render() {
    return (
      <div>
        <h2 id="title">Modern Calculator</h2>
        <div className="App">
          <Display disp = {this.state.output}/>
          <Input onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
