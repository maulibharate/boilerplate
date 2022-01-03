import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CONFIG } from "../Utils/Constants";

import RegisterContainer from '../Components/Register/RegisterContainer';
import LoginContainer from '../Components/Login/LoginContainer';
import DashboardContainer from '../Components/Dashboard/DashboardContainer';
import LogoutContainer from '../Components/Logout/LogoutContainer';


export default class Routers extends Component {

    renderRoutes = () => {
        return (
            <div>
                <Switch>
                    <Route exact path={CONFIG.path.login}>
                        <LoginContainer />
                    </Route>

                    <Route path={CONFIG.path.register}>
                        <RegisterContainer />
                    </Route>

                    <Route path={CONFIG.path.dashboard}>
                        <DashboardContainer />
                    </Route>

                    <Route path={CONFIG.path.logout}>
                        <LogoutContainer />
                    </Route>
                </Switch>
            </div> 
        );
    }

    render() {
        return (
            this.renderRoutes()
        );
    }
}
