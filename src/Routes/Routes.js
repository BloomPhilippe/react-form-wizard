import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Information from '../Components/Information';
import Address from '../Components/Address';
import { Row } from 'react-bootstrap';

class Routes extends Component {
    constructor(props){
        super(props)
        this.routes = [
            {
                path: "/",
                component: Information
            },
            {
                path: "/address",
                component: Address
            },
        ]
    }

    render() {
        return (
            <Row>
                {this.routes.map((route, i) => <Route
                    key={i}
                    path={route.path}
                    render={props => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} />
                    )}
                />)}
            </Row>
        );
    }
}


export default Routes;