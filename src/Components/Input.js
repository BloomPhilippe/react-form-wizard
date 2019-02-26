import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

class Input extends Component {
    render() {
        return (
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        );
    }
}

export default Input;