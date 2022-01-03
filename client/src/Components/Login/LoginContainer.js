import React from 'react';

import Login from './Login';
import { useHistory } from 'react-router-dom';

import { API_URL, HTTP_METHODS, HTTP_CODES, CONFIG } from '../../Utils/Constants';

import { validationSchema } from '../Validations/loginValidation'

function LoginContainer() {
    const history = useHistory();

    const initialValues = {
            email: '',
            password: '',
        }

    const onSubmit = async (values) => {
        const { email, password } = values;

        const res = await fetch(API_URL.LOGIN, {
            method: HTTP_METHODS.POST,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = await res.json();
            if(res.status === HTTP_CODES.BAD_REQUEST || !data) {
            window.alert("Invalid Credentials");
        } else {
            // dispatch({type:'USER', payload:true})
            console.log('Login Successfull');
            history.push(CONFIG.path.dashboard);
        }
    }
        
    return (
        <div>
           <Login 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
           /> 
        </div>
    )
}

export default LoginContainer
