import { createSlice } from "@reduxjs/toolkit";
let initialState={
    connections:null
}
export const connectionsSlice=createSlice({
    name:"connectionsSlice",
    initialState,
    reducers:{
        addConnections:(state,action)=>{
            state.connections=action.payload;
        },
        destroyConnections:function(state,action){
            state.connections=null;
        }
    }
})
export const{addConnections,destroyConnections}=connectionsSlice.actions;
export default connectionsSlice.reducer;
