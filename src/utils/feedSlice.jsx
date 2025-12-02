import { createSlice } from "@reduxjs/toolkit";
let initialState={
    feed:null
}
export const feedSlice=createSlice({
name:"feedSlice",
initialState,
reducers:{
    addFeed:(state,action)=>{
state.feed=action.payload;
    },
    removeFeed:(state,action)=>{
        state.feed=null;
    }
}
})
export const{addFeed,removeFeed}=feedSlice.actions;
export default feedSlice.reducer