import"./Pages.css";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom'; 
import { useDispatch } from "react-redux";
import { resetpassword } from "../../Redux/Authenticationredux/AuthenticationActions";

const ResetPassword = () => {

 const navigate=useNavigate();
 const dispatch=useDispatch();

 const {id,token}=useParams();

 const paramspayload={id,token}

  const formik = useFormik({
    initialValues: {
      newPassword: ''
    },

    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required('New password is required')
        .min(6, 'Password must be at least 6 characters long')
    }),

    onSubmit: (values) => {
      const totalvalues={values,id,token}

      dispatch(resetpassword(totalvalues));
      
      navigate('/loginpage');
    }
  });

  return (
    <div className="totalresetcontent d-flex justify-content-center align-items-center">
    <div className="reset-password-page blurred-div">
      <h1 className="resetlabel">Reset Password</h1>
      <form onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
        <div className="form-group resetpswrd d-flex flex-column justify-content-center align-items-center">
          <label name="newPassword" className="resetlabel">New Password</label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            className="resetinput"
          />
          {formik.errors.newPassword ? (
            <div className="error-message resetmsg">{formik.errors.newPassword}</div>
          ) : null}
        </div>

        <div className="resetupdate-btn d-flex justify-content-center align-items-center">
        <button type="submit" className="reset-update-btn">Update</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
