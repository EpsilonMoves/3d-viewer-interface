import { configureStore } from "@reduxjs/toolkit";
import fileNameReducer from "../reducers/current-file-slice";
import modelNamesReducer from "../reducers/model-names-slice";


export default configureStore({
    reducer:{
        fileNameReducer,modelNamesReducer
    }
})