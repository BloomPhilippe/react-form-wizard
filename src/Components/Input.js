import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../Styles/Input.css';

class Input extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control type={this.props.type}/>
            </Form.Group>
        );
    }
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['email', 'text', 'number']),
};

export default Input;