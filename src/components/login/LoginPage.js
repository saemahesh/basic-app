import React from 'react'
import { useFormik } from 'formik';
import '../../App.css'
import './login.css'
import { login} from './loginService'



export default function SignInPage() {
    const formik = useFormik({
        initialValues:{
          email:'',
          password:''
        },
        onSubmit:(values) =>{
          console.log('form submit', values)
          login(values)
        },
        validate:(values , e) =>{
            console.log('values ', values, e)
          let errors = {};
          if(!values.email) {
            errors.email = "Email Required"
          }
          if(!values.password){
            errors.password = "Password Required"
          }
          return errors;
        }
      })

    return (
        <div className='app_login'>
            <form onSubmit={formik.handleSubmit}>
                <h3>Login Here</h3>
                <label for="email">Username</label>
                <input type="text" placeholder="Email" 
                name='email' id="username" 
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email?<div className=" text-danger">{formik.errors.email}</div>:null}
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" name='password' 
                    id="password" onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                    {formik.touched.password && formik.errors.password?<div className="text-danger">{formik.errors.password}</div>:null}
                    <button type='submit'>Log In</button>
                    <div className='mt-2'>
                    <a  href="/register">
                        <span style={{color: '#58ffa7f0',fontSize: '15px'}}>Click here </span>
                         if you don't have account!</a>
                    </div>
            </form>
        </div>
    )
}
