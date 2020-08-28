import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        token: null,
    },
    reducers: {
        logIn(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;
        },
        logOut(state, action) {
            state.isLogged = false;
            state.token = null;
        },
    },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
