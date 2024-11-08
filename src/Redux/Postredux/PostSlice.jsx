import { createSlice } from "@reduxjs/toolkit";


const postSlice=createSlice({
    name:"Post",
    initialState:{
        loading:false
    },
    reducers:{
        postRequest(state,action){
            return{
                loading:true
            }
        },  

        postSuccess(state,action){
            return{
                loading:false,
                postdata:action.payload
            }
        },

        postSuccessclear(state,action){
            return{
                loading:false,
                post:null
            }
        },

        postFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        },

        

        
    }
});

const {actions,reducer}=postSlice;

export const{postRequest,postSuccess,postFail}=actions;

export default reducer;