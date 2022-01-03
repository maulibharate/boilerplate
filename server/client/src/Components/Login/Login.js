import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Card, CardTitle, CardBody, CardImg, Button  } from 'reactstrap';
import { Formik, Form, useField } from 'formik';

//images
import bgImage from "../../Assets/Images/user_background_img.jpg"

//css file
import "./Login.css"


const InputText = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props); /* is a custom React hook that will automagically help you hook up inputs to Formik. 
                                            You can and should use it to build your own custom input primitives */
    return (
      <>
        {/* <label htmlFor={props.id || props.name}>{label}</label> */}
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error mt-n3">{meta.error}</div>
        ) : null}
      </>
    );
  };

const login = (props) => {

  return (
    <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={ (values) =>  props.onSubmit(values) }
    >
      <Form>
        <section className="userSection">
          <Container className='login'>
            <Card>
                <CardImg className="bgImage" src={bgImage} />

                <CardBody className="py-5 px-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <CardTitle tag="h5" className="mb-0">Login Info</CardTitle>
                        <NavLink to="/Register">
                          <Button className='loginButton'>Register now</Button>
                        </NavLink>
                    </div>
                    <InputText
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className='form-control my-4'
                      // autocomplete="off"
                    />

                    <InputText
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className='form-control my-4'
                    />

                    <button type="submit" className='loginButton w-100 mt-4 btn btn-secondary'>Login</button>
                </CardBody>
              </Card>
            </Container>
        </section>
      </Form>
    </Formik>
  );
};

export default login;
