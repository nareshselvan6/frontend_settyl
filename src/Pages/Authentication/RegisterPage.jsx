import"../Authentication/Pages.css";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Authenticationredux/AuthenticationActions";
import NavBar from "../../Components/NavBar";

const RegisterPage = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const formik = useFormik({

    initialValues: {
      username: '',
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long')
    }),

    onSubmit: (values) => {

      dispatch(register(values))
      alert("register successfull")

      navigate("/loginpage");
     
    }

  });

  return (
    <>
  <NavBar/>
   
    <div className="totalregister authpackage d-flex flex-column align-items-center">
    <div className="registerpage blurred-div totalregister d-flex flex-column align-items-center ">
      <h1 className="contentcolor">REGISTER</h1>
      <form onSubmit={formik.handleSubmit} className="totalregister d-flex flex-column align-items-center">
        <div className="form-group totalregister d-flex flex-column align-items-center">
          <label className="username contentcolor">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="inputbox"
          />
          {formik.errors.username ? (
            <div className="error-message color">{formik.errors.username}</div>
          ) : null}
        </div>
        
        <div className="form-group totalregister d-flex flex-column align-items-center ">
          <label className="email  contentcolor">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
             className="inputbox"
          />
          {formik.errors.email ? (
            <div className="error-message color">{formik.errors.email}</div>
          ) : null}
        </div>
        
        <div className="form-group totalregister d-flex flex-column align-items-center">
          <label className="password contentcolor">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
             className="inputbox"
          />
          {formik.errors.password ? (
            <div className="error-message color">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit"  className="btn btn-primary totalregister d-flex flex-column align-items-center">Register</button>
      </form>
      <div className="already-account contentcolor">
        Already have an account? <Link to="/loginpage">Login here</Link>
      </div>
    </div>
    </div>
    </>
    
   

  );
};

export default RegisterPage;
