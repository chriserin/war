import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: "loading"
  }

  componentDidMount() {
    fetch("/hello").then((response) => {
      response.text().then((text) => {
        this.setState({message: text})
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">War</h1>
        </header>
        <p className="App-intro">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
