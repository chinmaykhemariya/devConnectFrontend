import { createSlice } from "@reduxjs/toolkit";
let initialState={
    requests:null
}
export const requestSlice=createSlice({
name:"requestSlice",
initialState,
reducers:{
    addRequests:(state,action)=>{
        state.requests=action.payload
    },
    destroyRequests:(state,action)=>{
        state.requests=null;
    }
}
})
export const{addRequests,destroyRequests}= requestSlice.actions;
export default requestSlice.reducer