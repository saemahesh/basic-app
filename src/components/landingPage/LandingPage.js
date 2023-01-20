import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
const BackgroundImage = 'https://img.freepik.com/free-photo/young-sportive-man-daancing-breakdance-isolared-black-backgrounf-neon-with-mixed-lights_155003-45629.jpg?w=900&t=st=1674124384~exp=1674124984~hmac=4459469df409e35eda6561082f67a215499450a7cda8582d09dfbd90e537e456';
export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="btn btn-outline-danger btn-rounded">log in</button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-outline-warning btn-rounded" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}