import React, {Component} from 'react';
import Input from './Input'
import { Row, Col, Button } from 'react-bootstrap';

class Information extends Component {
    render() {
        return (
            <Col>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Firstname' type='text'/>
                        <Input label='Lastname' type='text'/>
                    </Col>
                    <Col md={12}>
                        <Button variant="primary" size="lg">
                            Next
                        </Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Information;