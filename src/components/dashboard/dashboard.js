import React from "react";
import { useFormik } from "formik";
import "../../App.css";
import "./dashboard.css";
import Cookies from "js-cookie";
import axios from "axios";
import { env_config } from "../config/env";


export default function Dashboard() {
	if (!Cookies.get("uid")) {
		window.location.href = "/login";
	}
    axios.defaults.withCredentials = true
    axios.get(`${env_config.BASE_URL}/users/`).then((res)=> {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    });

	return (
		<div className='app_dashboard container'>
			<div>
				<h1>Welcome to dashboard</h1>
			</div>
		</div>
	);
}
