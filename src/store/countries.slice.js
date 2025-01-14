import { createSlice } from "@reduxjs/toolkit";


const countrySlice = createSlice({
    name: "countries",

    initialState: {
        region: "",
        country:"",
        countries:[]
    },

    reducers: {
        SET_REGION: (state, action) =>{
            state.region= action.payload
        },

        SET_COUNTRIES: (state, action) => {
            state.countries= action.payload
        }
    }
})

export const { SET_REGION, SET_COUNTRIES } = countrySlice.actions;
export default countrySlice.reducer;