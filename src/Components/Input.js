import React, {Component} from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import '../Styles/Input.css'
import { connect } from 'react-redux'

class Input extends Component {
    constructor(props){
        super(props)
        this.value = ''
    }

    static defaultProps = {
        elementType: 'input'
    }


    static propTypes = {
        label: PropTypes.string,
        type: PropTypes.oneOf(['email', 'text', 'number']),
        elementType: PropTypes.oneOf(['input', 'textarea']),
        action: PropTypes.string,
    }

    _setValue(event){
        const action = {
            type: this.props.action,
            value: {
                value: event.target.value,
                isValid: event.target.checkValidity(),
            }
        }

        this.props.dispatch(action)
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                {this.props.elementType === 'input' &&
                    <Form.Control type={this.props.type} onBlur={(event) => this._setValue(event)} required={this.props.required} pattern={this.props.pattern} min={this.props.min} max={this.props.max}/>
                }
                {this.props.elementType === 'textarea' &&
                    <Form.Control as="textarea" rows="3" onBlur={(event) => this._setValue(event)} required={this.props.required} pattern={this.props.pattern}/>
                }
            </Form.Group>

        )
    }
}

const mapStateToProps = (state) => {
    return state.setInputs
}

export default connect(mapStateToProps)(Input)