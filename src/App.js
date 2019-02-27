import React, { Component } from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import { Navbar,  Jumbotron, Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Routes from './Routes/Routes'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <div className="App">
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                  <img
                      alt=""
                      src="/projets/react-form-wizard/images/logo.svg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                  />
                  {' Form Wizard'}
                </Navbar.Brand>
              </Navbar>
              <Jumbotron>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Form Wizard</h1>
              </Jumbotron>
              <Container>
                <Router basename="/projets/react-form-wizard">
                  <Routes/>
                </Router>
              </Container>
            </div>
        </Provider>
    )
  }
}

export default App
