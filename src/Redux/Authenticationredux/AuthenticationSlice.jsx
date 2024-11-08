import { createSlice } from "@reduxjs/toolkit";


const authenticationSlice=createSlice({
    name:"Authentication",
    initialState:{
        loading:false
    },
    reducers:{
        authenticationRequest(state,action){
            return{
                loading:true
            }
        },
        

        authenticationSuccess(state,action){
            return{
                loading:false,
                authentication:action.payload
            }
        },
        authenticationSuccessclear(state,action){
            return{
                loading:false,
                authentication:null
            }
        },

        authenticationFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        },

        

        
    }
});

const {actions,reducer}=authenticationSlice;

export const{authenticationRequest,authenticationSuccess,authenticationFail}=actions;

export default reducer;