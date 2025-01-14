import { createSlice } from "@reduxjs/toolkit";


const countrySlice = createSlice({
    name: "countries",
    initialState: {
        countries:[]
    },

    reducers: {
        setCountries: (state, action) => {
            state.countries= action.payload
        }
    }
})

export const { setCountries } = countrySlice.actions;
export default countrySlice.reducer;