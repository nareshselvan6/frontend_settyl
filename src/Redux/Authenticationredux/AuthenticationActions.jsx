import axios from "axios";
import {authenticationRequest,authenticationSuccess,authenticationFail} from "./AuthenticationSlice";


//! register(Post)

export const register=(value)=>async(dispatch)=>{
    try {
        dispatch(authenticationRequest());
        const registerdetails= await axios.post(`https://backend-settyl.onrender.com/logincrediential/register-user`,value);
        dispatch(authenticationSuccess(registerdetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}

//! login(Put)

export const login=(value)=>async(dispatch)=>{
    try {
        dispatch(authenticationRequest());
        const logindetails= await axios.put(`https://backend-settyl.onrender.com/logincrediential/login-user`,value);
        dispatch(authenticationSuccess(logindetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}


//! forgotpassword(Put)

export const forgotpassword=(value)=>async(dispatch)=>{
    try {
        dispatch(authenticationRequest());
        const forgotpswddetails= await axios.put(`https://backend-settyl.onrender.com/logincrediential/forgetpassword`,value);
        dispatch(authenticationSuccess(forgotpswddetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}


//! resetpassword(Put)

export const resetpassword=(value)=>async(dispatch)=>{
    try {
        const{values,id,token}=value
        dispatch(authenticationRequest());
        const resetpswddetails= await axios.put(`https://backend-settyl.onrender.com/logincrediential/resetpassword/${id}/${token}`,values.newPassword);
        dispatch(authenticationSuccess(forgotpswddetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}