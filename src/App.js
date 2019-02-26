import React, { Component } from 'react';
import { Navbar, Container,  Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
                alt=""
                src="/images/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' React Bootstrap'}
          </Navbar.Brand>
        </Navbar>
        <Jumbotron>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Form Wizard</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
