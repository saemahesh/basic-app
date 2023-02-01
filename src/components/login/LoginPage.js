import React from "react";
import { useFormik } from "formik";
import "../../App.css";
import "./login.css";
import { login } from "./loginService";
import { useState } from "react";
import Cookies from 'js-cookie'

export default function SignInPage() {
	console.log('cookies: ', Cookies.get('uid'))
	if (Cookies.get('uid')) {
		window.location.href = '/dashboard';
	}
	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log("form submit", values);
			login(values)
				.then(function (response) {
					setShowSuccess(true)
					window.location.href = '/dashboard';
				})
				.catch(function (error) {
					setShowError(true);
				});
		},
		validate: (values, e) => {
			console.log("values ", values, e);
			let errors = {};
			if (!values.email) {
				errors.email = "Email Required";
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			}
			if (!values.password) {
				errors.password = "Password Required";
			}
			return errors;
		},
	});

	return (
		<div className='app_login'>
				<center>
				<form
					onSubmit={formik.handleSubmit}
					className="col-md-offset-3 col-lg-offset-3"
				>
					<h3>Login Here</h3>
					<label for="email">Email</label>
					<input
						type="text"
						placeholder="Email"
						name='email'
						id="username"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className=" text-danger">{formik.errors.email}</div>
					) : null}
					<label for="password">Password</label>
					<input
						type="password"
						placeholder="Password"
						name='password'
						id="password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className="text-danger">{formik.errors.password}</div>
					) : null}
					<button type='submit' className="btn btn-md submit-btn">
					<i class="fas fa-sign-in-alt"></i>
					Log In
					</button>
					<div>
						{showError && (

								<div class="alert alert-dismissible fade show alert-danger" role="alert" data-mdb-color="warning" id="customxD">
									<strong>Error!</strong> Email or Password is Incorrect.
									<button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
								</div>
						

						)}
						{showSuccess && (
							<div className="alert alert-success">
								<strong>Success!</strong> Logged in Successfully
							</div>
						)}
					</div>
					<div className='mt-2'>
						<a href="/register">
							<span style={{ color: "#58ffa7f0", fontSize: "15px" }}>
								Click here{" "}
							</span>
							if you don't have account!
						</a>
					</div>
				</form>
				</center>
		</div>
	);
}
