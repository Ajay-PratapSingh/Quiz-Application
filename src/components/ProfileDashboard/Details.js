import React from 'react'
import "./ProfileDashboard.css";

export default function Details() {

    const username="test_account123";
    const level="Beginner";

    return (
        <div className='details-wrapper'>
            <h3>My Profile</h3>
            <div className='profilepic-area'>
                <img
                    style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                    src="https://i.pinimg.com/550x/d5/05/e3/d505e30b9ea06f15e5042df1eabd0e17.jpg"
                    alt="Profile Picture"
                />
                <p style={{margin:10}}>{username}</p>
                <h4 style={{margin:0,fontSize:16}}>{level}</h4>
            </div>
            <div>
                <h4>Badges</h4>
            </div>
        </div>
    )
}
