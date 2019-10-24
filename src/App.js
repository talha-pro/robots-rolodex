import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      string: 'Aoa This is Talha ! And this is commited'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>{this.state.string}</p>
          
        </header>
      </div>
    );
  }
}

export default App;
