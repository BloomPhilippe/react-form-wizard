import React, { Component } from 'react';
import { Navbar,  Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Store from './Store/configureStore';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={Store}>
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
            <Container>
              <Row>
                <Col>

                </Col>
              </Row>
            </Container>
          </div>
        </Provider>
    );
  }
}

export default App;
