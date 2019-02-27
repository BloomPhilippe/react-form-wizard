import React, {Component} from 'react';
import {Row, Col, Alert} from 'react-bootstrap';
import '../Styles/formStep.css'
import {connect} from "react-redux";

class Job extends Component {
  constructor(props){
    super(props)
    if(!this.props.form.isCompleted){
      this.props.history.push('/')
    }

  }

  render() {
    return (
        <Col className="section">
          <h3>Result</h3>
          <Row className="justify-content-center pb-15">
            <Col md={7}>
              <Alert variant="success">
                <Alert.Heading>Hey {this.props.form.firstName.value}, nice to see you</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message. This example
                  text is going to run a bit longer so that you can see how spacing within an
                  alert works with this kind of content.
                </p>
              </Alert>
            </Col>
          </Row>
        </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.setInputs
  }
}

export default connect(mapStateToProps)(Job)