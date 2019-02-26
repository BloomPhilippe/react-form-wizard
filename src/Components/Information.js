import React, {Component} from 'react';
import Input from './Input'
import { Row, Col } from 'react-bootstrap';

class Information extends Component {
    render() {
        return (
            <Col md={7}>
                <Input label='Firstname' type='text'/>
                <Input label='Lastname' type='text'/>
            </Col>
        );
    }
}

export default Information;