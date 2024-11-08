import "../Authentication/Pages.css";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Authenticationredux/AuthenticationActions";
import { Navbar } from "react-bootstrap";
import NavBar from "../../Components/NavBar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authentication, loading } = useSelector(
    (state) => state.authenticationState
  );
  

  useEffect(() => {
    if (!authentication) {
      return;
    }

    if (!authentication?.accesstoken) {
      console.log("token not get");
    } else {
      localStorage.setItem("jwt", authentication?.accesstoken);
      alert("login successfull")
      navigate("/post");
   }
  }, [authentication]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
    }),

    onSubmit: (values) => {

      dispatch(login(values));
    },
  });

  return (
  <>
  <NavBar/>
    <div className="totallogin-page">
    <div className="login-page blurred-div">
      <h1 className=" login d-flex justify-content-center align-items-center">LOGIN</h1>
      <form onSubmit={formik.handleSubmit} className="d-flex-column justify-content-center align-items-center">
        <div className="form-group d-flex flex-column justify-content-center align-items-center">
          <label name="email" className="loginlabel email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="box"
          />
          {formik.errors.email ? (
            <div className="error-message loginlabel">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group d-flex flex-column justify-content-center align-items-center ">
          <label name="password" className="loginlabel password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="box"
          />
          {formik.errors.password ? ( 
            <div className="error-message loginlabel">{formik.errors.password}</div>
          ) : null}
        </div>
   
        <div className="loginsubmit d-flex justify-content-center align-items-center">
        <button type="submit" className="btn btn-primary loginsubmit">
          Sign In
        </button>
        </div>
      </form>
    
    </div>
    </div>
    </>
  );
};

export default Login;
