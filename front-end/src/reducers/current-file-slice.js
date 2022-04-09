import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
  name: "file",
  initialState: {
    currentFileUrl: "",
    currentFileDetails:{
      verticesNum:0,
      sizeX:0,
      sizeY:0,
      sizeZ:0,
    }
  },
  reducers: {
    setReducerFile: (state, action) => {
      state.currentFileUrl = action.payload;
    },
    setReducerFileDetails:(state,action)=>{
      state.currentFileDetails=action.payload
    }
  },
});

export const { setReducerFile,setReducerFileDetails } = fileSlice.actions;
export const selectFile = (state) => state.fileNameReducer.currentFileUrl
export const selectFileDetailes = (state) => state.fileNameReducer.currentFileDetails

export default fileSlice.reducer;
