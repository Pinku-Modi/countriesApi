import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        themes:"dark"
    },

    reducers: {
        SET_THEME: (state, action) => {
            state.themes= action.payload;
        }
    }
})

export const { SET_THEME } = themeSlice.actions
export default themeSlice.reducer;