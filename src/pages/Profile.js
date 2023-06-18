import React, { Fragment } from 'react'
import Banner from '../components/ProfileDashboard/Banner'
import Tasks from '../components/ProfileDashboard/Tasks'
import Activity from '../components/ProfileDashboard/Activity'
import Details from '../components/ProfileDashboard/Details'
import "../components/ProfileDashboard/ProfileDashboard.css"

export default function Profile() {
    return (
        <Fragment>
            <div className='profile-container'>
                <div className='mid-container'>
                    <Banner></Banner>
                    <Tasks></Tasks>
                    <Activity></Activity>
                </div>

                <Details></Details>
            </div>
        </Fragment>
    )
}
