import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from '../redux/items'
import {TypedUseSelectorHook,useSelector,useDispatch} from "react-redux"

export const store=configureStore({
    reducer:{
        itemsReducer,
    }
})

//export type RootState= ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch

export const useItemsSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
export const useItemDispatch=()=> useDispatch<typeof store.dispatch>()