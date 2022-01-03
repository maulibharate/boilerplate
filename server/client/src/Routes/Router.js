import React, { Component } from 'react';

import Routes from "./Routes";

export class Router extends Component {

    renderRouter = () => {
        return (
            <Routes />
        );
    }
    
    render() {
        return (
            this.renderRouter()
        );
    }
}

export default Router;
