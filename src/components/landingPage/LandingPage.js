import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import './landingpage.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header className="landing-page" style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
            <div className='container'>
            <div className="row">
            <div className="card col-sm-12 col-md-3 col-xs-12" >
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.webp" alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title"><a>Card title</a></h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-3 col-xs-12" >
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.webp" alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title"><a>Card title</a></h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card  col-sm-12 col-md-3 col-xs-12" >
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.webp" alt="Card image cap1" />
                    <div className="card-body">
                        <h4 className="card-title"><a>Card title</a></h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-3 col-xs-12" >
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.webp" alt="Card image cap2" />
                    <div className="card-body">
                        <h4 className="card-title"><a>Card title</a></h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
          
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