import React, {Component} from 'react';
import Input from './Input'
import {Row, Col, Button, Alert} from 'react-bootstrap';
import '../Styles/formStep.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Address extends Component {

    constructor(props){
        super(props)
        this.state = {
            isValid: true
        }
    }

    _nextStep() {
        if(this.props.form.street.isValid &&
            this.props.form.number.isValid &&
            this.props.form.zip.isValid &&
            this.props.form.city.isValid
        ){
            this.props.history.push('/job')
        }else{
            this.setState({
                isValid: false
            })
        }
    }

    render() {
        return (
            <Col className="section">
                <h3>Address</h3>
                <Row className="justify-content-center pb-15">
                    <Col md={7}>
                        <Input label='Street' type='text' action="SET_STREET" required={true} value={this.props.form.street.value}/>
                        <Input label='Number' type='text' action="SET_NUMBER" required={false} pattern="[0-9A-Za-z]{3,50}" value={this.props.form.number.value}/>
                        <Input label='Zip code' type='number' action="SET_ZIP" required={true} min="1000" max="9999" value={this.props.form.zip.value}/>
                        <Input label='City' type='text' action="SET_CITY" required={true} pattern="[A-Za-z]{3,50}" value={this.props.form.city.value}/>
                    </Col>
                    <Col md={12}>
                        <Link className="btn btn-primary btn-lg btn-previous" to="/">Previous</Link>
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.setInputs
    }
}

export default connect(mapStateToProps)(Address)