import axios from "axios";
import { postFail, postRequest, postSuccess } from "./PostSlice";

//! create(Post)

export const createpost=(value)=>async(dispatch)=>{
try {
    dispatch(postRequest())
    const createpost=await axios.post(`https://backend-settyl.onrender.com/postcreation/createpost`,value)
    dispatch(postSuccess(createpost.data))
    //   http://localhost:7007/postcreation/createpost
} catch (error) {
    dispatch(postFail(error))
}

}

// ! Get post

export const getpost=()=>async(dispatch)=>{
    try {
        dispatch(postRequest())
        const getpost=await axios.get(`https://backend-settyl.onrender.com/postcreation/getpost`)
        dispatch(postSuccess(getpost.data))
    } catch (error) {
        dispatch(postFail(error))
    }
    
    }
    

// ! Put like

export const updatelike=(value)=>async(dispatch)=>{
    try {
        dispatch(postRequest());
        const updatelike= await axios.put(`https://backend-settyl.onrender.com/postcreation/updatelike`,value);
        dispatch(postSuccess(updatelike.data));
    } catch (error) {
        dispatch(postFail(error));
    }
}

// ! Put comment 

export const updatecomment=(value)=>async(dispatch)=>{
    try {
        dispatch(postRequest());
        const updatecomment= await axios.put(`https://backend-settyl.onrender.com/postcreation/updatecomment`,value);
        dispatch(postSuccess(updatecomment.data));
    } catch (error) {
        dispatch(postFail(error));
    }
}


// ! Delete

export const deletepost=(userid)=>async(dispatch)=>{
    try {
        dispatch(postRequest());
        const deletepost= await axios.put(`https://backend-settyl.onrender.com/postcreation/deletepost`,userid);
        dispatch(postSuccess(deletepost.data));
    } catch (error) {
        dispatch(postFail(error));
    }
}


