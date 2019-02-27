import React, {Component} from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import '../Styles/Input.css'

class Input extends Component {
    constructor(props){
        super(props)
    }

    static defaultProps = {
        elementType: 'input'
    };


    static propTypes = {
        label: PropTypes.string,
        type: PropTypes.oneOf(['email', 'text', 'number']),
        elementType: PropTypes.oneOf(['input', 'textarea']),
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                {this.props.elementType === 'input' &&
                    <Form.Control type={this.props.type}/>
                }
                {this.props.elementType === 'textarea' &&
                    <Form.Control as="textarea" rows="3" />
                }
            </Form.Group>

        )
    }
}

export default Input