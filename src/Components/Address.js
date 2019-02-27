import React, {Component} from 'react';
import Input from './Input'
import { Row, Col, Button } from 'react-bootstrap';
import '../Styles/formStep.css'

class Address extends Component {
    render() {
        return (
            <Col>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Street' type='text'/>
                        <Input label='Number' type='number'/>
                        <Input label='Zip code' type='number'/>
                        <Input label='City' type='text'/>
                    </Col>
                    <Col md={12}>
                        <Button variant="primary" size="lg" className="btn-previous"  href="/">
                            Previous
                        </Button>
                        <Button variant="primary" size="lg"  href="/job">
                            Next
                        </Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Address;