import React, {Component} from 'react'
import Input from './Input'
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Information extends Component {

    constructor(props){
        super(props)
    }

    _nextStep = () => {

    }

    render() {
        return (
            <Col className="section">
                <h3>Informations</h3>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <Input label='Firstname' type='text' action="SET_FIRSTNAME" required={true} pattern="[A-Za-z]{3,50}"/>
                        <Input label='Lastname' type='text' action="SET_LASTNAME" required={true} pattern="[A-Za-z]{3,50}"/>
                    </Col>
                    <Col md={12}>
                        <Link className="btn btn-primary btn-lg" to="/address">Next</Link>
                    </Col>
                </Row>
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return state.setInputs
}

export default connect(mapStateToProps)(Information)