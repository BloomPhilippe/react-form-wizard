import React, {Component} from 'react';
import Input from './Input'
import { Row, Col, Button } from 'react-bootstrap';

class Address extends Component {
    render() {
        return (
            <Col>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Street' type='text'/>
                    </Col>
                    <Col md={12}>
                        <Button variant="primary" size="lg">
                            Previous
                        </Button>
                        <Button variant="primary" size="lg">
                            Next
                        </Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Address;