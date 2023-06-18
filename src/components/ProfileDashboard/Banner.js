import React from 'react'
import "./ProfileDashboard.css";
import bannerimage from "../../images/undraw_reading_re_29f8.svg"

export default function Banner() {
    const Name = "Sophia";
    const pending_tasks = 3;
    return (
        <div className='banner-wrapper'>
            <div className='banner'>
                <div className='bannertext'>
                    <h4>Hi {Name}</h4>
                    <p>Excited to start testing your knowledge?<br />
                        you have {pending_tasks} pending tasks
                    </p>
                </div>
                <img src={bannerimage} className='bannerimg'></img>
            </div>
        </div>
    )
}
