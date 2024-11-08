import { configureStore,combineReducers } from "@reduxjs/toolkit";
import postreducer from "./Postredux/PostSlice";
import authenticationreducer from "./Authenticationredux/AuthenticationSlice"



const reducer = combineReducers({

authenticationState:authenticationreducer,
poststate:postreducer

})

const store =configureStore({
    reducer,

})

export default store;
