import React from 'react';
import { useHistory } from 'react-router-dom';
import { HTTP_METHODS, API_URL, HTTP_CODES, CONFIG } from '../../Utils/Constants';

import { validationSchema } from '../Validations/registerValidation';

import Register from './Register';

function RegisterContainer() {
    const history = useHistory();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      }

    const onSubmit = async (values) => {
        const { firstName, lastName, email, phone, password, confirmPassword } = values;
      
        const res = await fetch(API_URL.REGISTER, {
          method: HTTP_METHODS.POST,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName, lastName, email, phone, password, confirmPassword
          })
        })
  
        const data = await res.json();
        if (data.status === HTTP_CODES.UNPROCESSABLE_ENTITY || !data) {
          window.alert('Invalid Registation');
          console.log('Invalid Registation');
        } else {
          window.alert('Registation Successfull');
          console.log('Registation Successfull');
  
          history.push(CONFIG.path.login)
        }
    }

    return (
        <div>
            <Register 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default RegisterContainer;
