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
                        <Input label='Street' type='text' action="SET_STREET" required={true}/>
                        <Input label='Number' type='text' action="SET_NUMBER" required={false} pattern="[0-9A-Za-z]{3,50}"/>
                        <Input label='Zip code' type='number' action="SET_ZIP" required={true} min="1000" max="9999"/>
                        <Input label='City' type='text' action="SET_CITY" required={true} pattern="[A-Za-z]{3,50}"/>
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