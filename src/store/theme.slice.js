import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        themes:"dark"
    },

    reducers: {
        setTheme: (state, action) => {
            state.themes= action.payload;
        }
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer;