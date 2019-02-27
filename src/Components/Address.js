import React, {Component} from 'react';
import Input from './Input'
import { Row, Col } from 'react-bootstrap';
import '../Styles/formStep.css'
import {Link} from "react-router-dom";

class Address extends Component {
    render() {
        return (
            <Col className="section">
                <h3>Address</h3>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Street' type='text'/>
                        <Input label='Number' type='number'/>
                        <Input label='Zip code' type='number'/>
                        <Input label='City' type='text'/>
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

export default Address;