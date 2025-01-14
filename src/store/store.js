import { configureStore } from "@reduxjs/toolkit"
import countryReducer from "./countries.slice.js"

export const store = configureStore({
    reducer: {
        countries: countryReducer
    }
})
