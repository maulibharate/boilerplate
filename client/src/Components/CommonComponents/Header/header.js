import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { IMAGE_ALT, CONFIG } from '../../../Utils/Constants';

import './header.css';

// import images
import Logo from '../../../Assets/logo.jpg';

const header = () => {
    return (
        <section className='header p-2'>
            <Row className='d-flex align-items-center'>
                <Col md="4" >
                    <div class="logoDiv">
                        <img src={Logo} className="logo" alt={IMAGE_ALT.LOGO_IMAGE}/>
                    </div>
                </Col>

                <Col className='text-center' md="4">
                    <h3>BoilerPlate</h3>
                </Col>

                <Col className='text-end' md="4">
                    <div className="headerManu">
                        <span className='px-2'>
                            <NavLink to={CONFIG.path.dashboard}>Home</NavLink>
                        </span>

                        <span className='px-2'>
                            <NavLink to={CONFIG.path.logout}>logout</NavLink>
                        </span>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default header;