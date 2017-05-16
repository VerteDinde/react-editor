import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Welcome to Hops Music!',
      color: '#9F0E11'
    };
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeMessage(message) {
    this.setState({ message });
  }

  changePhoto(photo) {
    this.setState({ photo });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hops Music: Beta Edition</h2>
        </div>
        <div className="settings">
          <h3>Let's Play in React: What do you want to do?</h3>
          <p><label>
            Color:
            <input
              type="color"
              value={this.state.color}
              onChange={e => this.changeColor(e.target.value)} />
          </label></p>
          <p><label>
            Message: 
            <input 
            type="message"
            value={this.state.message}
            onChange={e => this.changeMessage(e.target.value)} />
          </label></p>
        </div>
        <div className="display" style={{ color: this.state.color }}>
          <p className="text">
            To get started, edit <code>src/App.js</code> and save to reload.
            {this.state.message}
          </p>
        </div>
      </div>
    );
  }
}

export default App;