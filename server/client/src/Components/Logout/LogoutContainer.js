import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { HTTP_METHODS, API_URL } from '../../Utils/Constants';
import { UserContext  } from '../App/App';

import Logout from './Logout';

function LogoutContainer() {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        fetch(API_URL.LOGOUT, {
            method: HTTP_METHODS.GET,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            dispatch({type:'USER', payload:false})
            history.push('/', { replace: true});
            if(res.status !== HTTP_METHODS.REQUEST_SUCCEEDED) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    });


    return (
        <div>
            <Logout />
        </div>
    )
}

export default LogoutContainer
