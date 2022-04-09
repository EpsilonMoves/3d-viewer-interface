

import { createSlice } from "@reduxjs/toolkit";


const modelNameSlice=createSlice({
    name:'names',
    initialState:{
        value:[],
    },reducers:{
        setReducerName:(state,action) => {
            state.value = [...action.payload]
        },
        addReducerName:(state,action)=>{
            state.value=[...state.value,action.payload]
        }
    },
})

export const {setReducerName,addReducerName} = modelNameSlice.actions
export const selectNames = (state)=> state.modelNamesReducer.value

export default modelNameSlice.reducer


