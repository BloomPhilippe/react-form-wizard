import React, {Component} from 'react';
import Input from './Input'
import { Row, Col, Button } from 'react-bootstrap';
import '../Styles/formStep.css'
import {Link} from "react-router-dom";

class Job extends Component {
    render() {
        return (
            <Col className="section">
                <h3>Job</h3>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Job title' type='text'  action="SET_JOBTITLE"/>
                        <Input label='Description' elementType='textarea' action="SET_JOBDESCRIPTION"/>
                    </Col>
                    <Col md={12}>
                        <Link className="btn btn-primary btn-lg btn-previous" to="/">Previous</Link>
                        <Link className="btn btn-primary btn-lg" to="/job">Next</Link>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Job;