import React, { useEffect, useState } from 'react';
import  { useHistory } from 'react-router-dom';

import { API_URL, HTTP_METHODS, CONFIG, HTTP_CODES } from '../../Utils/Constants';

import Dashboard from './Dashboard';

function DashboardContainer() {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callDashboardPage = async () => {
        try {
            const res = await fetch(API_URL.DASHBOARD, {
                method: HTTP_METHODS.GET,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if(!res.status === HTTP_CODES.REQUEST_SUCCEEDED) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            history.push(CONFIG.path.login);
        }
    }

    useEffect(() => {
        callDashboardPage();
    }, []);

    return (
        <div>
            <Dashboard 
                userData={userData}
            />
        </div>
    )
}

export default DashboardContainer;
