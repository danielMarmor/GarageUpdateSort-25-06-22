import React, { Component } from "react";
import Car from "./Car";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Car brand="Honda" model="civic" color="blue"/>
        <Car brand="Ferrari" model="Testa Rossa" color="red"/>
        <Car brand="Chevrolet" model="cavalier" color="green"/>
      </div>
    );
  }
}

export default App;
