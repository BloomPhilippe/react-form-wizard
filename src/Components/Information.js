import React, {Component} from 'react'
import Input from './Input'
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
                        <Input label='Firstname' type='text'/>
                        <Input label='Lastname' type='text'/>
                    </Col>
                    <Col md={12}>
                        <Link className="btn btn-primary btn-lg" to="/address">Next</Link>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default Information