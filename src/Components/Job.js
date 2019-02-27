import React, {Component} from 'react';
import Input from './Input'
import {Row, Col, Button, Alert} from 'react-bootstrap';
import '../Styles/formStep.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Job extends Component {
    constructor(props){
        super(props)
        this.state = {
            isValid: true
        }
    }

    _nextStep() {
        if(this.props.form.jobTitle.isValid && this.props.form.jobDescription.isValid){
            this.setState({
                isValid: true
            })
        }else{
            this.setState({
                isValid: false
            })
        }
    }

    render() {
        return (
            <Col className="section">
                <h3>Job</h3>
                <Row className="justify-content-center pb-15">
                    <Col md={7}>
                        <Input label='Job title' type='text' action="SET_JOBTITLE" required={true} value={this.props.form.jobTitle.value}/>
                        <Input label='Description' elementType='textarea' action="SET_JOBDESCRIPTION" required={true} value={this.props.form.jobDescription.value}/>
                    </Col>
                    <Col md={12}>
                        <Link className="btn btn-primary btn-lg btn-previous" to="/">Previous</Link>
                        <Button variant="primary" size="lg" onClick={() => this._nextStep()}>
                            Finish
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

export default connect(mapStateToProps)(Job)