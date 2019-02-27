import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../Styles/formStep.css'
import {connect} from "react-redux";

class Job extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <Col className="section">
          <h3>Result</h3>
          <Row className="justify-content-center pb-15">
            <Col md={7}>

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