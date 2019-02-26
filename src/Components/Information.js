import React, {Component} from 'react';
import Input from './Input'
import { Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class Information extends Component {
    constructor(props){
        super(props)
    }

    _nextStep = () => {

    }

    render() {
        return (
            <Col>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Firstname' type='text'/>
                        <Input label='Lastname' type='text'/>
                    </Col>
                    <Col md={12}>
                        <Link to="/address">Home</Link>
                        <Button variant="primary" size="lg" href="/address">
                            Next
                        </Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Information;