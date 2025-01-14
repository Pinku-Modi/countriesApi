import { configureStore } from "@reduxjs/toolkit"
import countryReducer from "./countries.slice.js"
import themeReducer from "./theme.slice.js"

export const store = configureStore({
    reducer: {
        countries: countryReducer,
        theme: themeReducer,
    }
})
