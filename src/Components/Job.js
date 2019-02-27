import React, {Component} from 'react';
import Input from './Input'
import { Row, Col, Button } from 'react-bootstrap';
import '../Styles/formStep.css'

class Job extends Component {
    render() {
        return (
            <Col>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Job title' type='text'/>
                        <Input label='Description' elementType='textarea'/>
                    </Col>
                    <Col md={12}>
                        <Button variant="primary" size="lg" className="btn-previous" href="/address">
                            Previous
                        </Button>
                        <Button variant="primary" size="lg">
                            Finish
                        </Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Job;