import {configureStore} from "@reduxjs/toolkit"
import noteReducer from './noteSlice'

const appStore = configureStore({
    reducer:{
        note:noteReducer
    }
})

export default appStore;