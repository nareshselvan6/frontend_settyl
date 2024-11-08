import"../Authentication/Pages.css";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotpassword } from "../../Redux/Authenticationredux/AuthenticationActions";
import Footers from "../../Components/Footers";
import NavBar from "../../Components/NavBar";

const ForgotPassword = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();


  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
    }),
    onSubmit: (values) => {
      console.log('Form data', values);

      dispatch(forgotpassword(values));
      
    }
  });

  return (
    <>
  <NavBar/>
    <div className="forgettotalcontent">
    <div className="forgot-password-page blurred-div">
      <h1 cla>Forgot Password</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group d-flex flex-column justify-content-center align-items-center">
          <label name="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="forgotinput"
          />
          {formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="forgotsent-btn d-flex justify-content-center align-items-center">
        <button type="submit" className="btn btn-success">Sent</button>
        </div>
      </form>
    </div>
    </div>
    <Footers/>
    </>
  );
};

export default ForgotPassword;
