import React from 'react'

import Header from '../CommonComponents/Header/header';

import './Dashboard.css';

const Dashboard = (props) => {

    return (
        <>
            <section className='Dashboard'>
                <Header />

                <div class="HomeSection">
                    <h1>Hello { props.userData.firstName }</h1>
                </div>

            </section>
        </>
    )
}

export default Dashboard;