import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/landingPage/LandingPage'
import LoginPage from './components/login/LoginPage'
import RegisterPage from './components/register/RegisterPage'
import ForgetPasswordPage from './components/forgotPassword/ForgetPasswordPage'
import HomePage from './components/home/HomePage'
import HeaderPage from './components/header/HeaderPage'
import FooterPage from './components/footer/Footer'

import './App.css'

export default function App() {
    return (
        <div>
        <HeaderPage />
        <Router>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
        </Router>
        <FooterPage />
        </div>
    )
}

// const Footer = () => {
//     return (
//         <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">IZEMSPOT</a></p>
//     )
// }

// const FooterStyle = {
//     background: "#222",
//     fontSize: ".8rem",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//     padding: "1rem",
//     margin: 0,
//     width: "100%",
//     opacity: ".5"
// }