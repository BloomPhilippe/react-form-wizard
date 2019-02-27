import React, {Component} from 'react'
import Input from './Input'
import { Row, Col, Button, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../Styles/formStep.css'

class Information extends Component {

    constructor(props){
        super(props)
        this.state = {
            isValid: true
        }
    }

    _nextStep() {
        if(this.props.form.firstName.isValid && this.props.form.lastName.isValid){
            this.props.history.push('/address')
        }else{
            this.setState({
                isValid: false
            })
        }
    }

    render() {
        return (
            <Col className="section">
                <h3>Informations</h3>
                <Row className="justify-content-center pb-15">
                    <Col md={7}>
                        <Input label='Firstname' type='text' action="SET_FIRSTNAME" required={true} pattern="[A-Za-z]{3,50}" value={this.props.form.firstName.value}/>
                        <Input label='Lastname' type='text' action="SET_LASTNAME" required={true} pattern="[A-Za-z]{3,50}" value={this.props.form.lastName.value}/>
                    </Col>
                    <Col md={12}>
                        <Button variant="primary" size="lg" onClick={() => this._nextStep()}>
                            Next
                        </Button>
                    </Col>
                </Row>
                {!this.state.isValid &&
                    <Alert variant="danger">
                        Some required fields are missing, empty or in bad format
                    </Alert>
                }

            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.setInputs
    }
}

export default connect(mapStateToProps)(Information)