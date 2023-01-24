import { configureStore } from "@reduxjs/toolkit";
import { scenarioSlice } from "../slices/scenarioSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



export const store= configureStore({

    reducer : {
        scenario: scenarioSlice.reducer
    },
 
    

})

export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;


