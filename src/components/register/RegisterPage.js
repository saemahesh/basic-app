import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { register} from './registerService'
import Cookies from 'js-cookie';

import '../../App.css'

export default function SignUpPage() {
  if(Cookies.get('uid')){
    window.location.href = '/dashboard';
  }
    const formik = useFormik({
        initialValues:{
          name: '',
          email:'',
          password:''
        },
        onSubmit:(values) =>{
          console.log('form submit', values)
          register(values)
        },
        validate:(values , e) =>{
            console.log('values ', values, e)
          let errors = {};
          if(!values.email) {
            errors.email = "Email Required"
          }
          if(!values.name) {
            errors.name = "Name Required"
          }
          if(!values.password){
            errors.password = "Password Required"
          }
          return errors;
        }
      })

    return (
        <div className="text-center m-5-auto">
            <div className='joinus'>
            <div className='bg-warning'>Register Now</div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" required onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name?<div className=" text-danger">{formik.errors.name}</div>:null}
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email?<div className=" text-danger">{formik.errors.email}</div>:null}
               
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password?<div className=" text-danger">{formik.errors.password}</div>:null}
               
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
