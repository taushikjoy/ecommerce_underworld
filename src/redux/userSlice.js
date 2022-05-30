import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFatching: false,
    error: false,
  },

  reducers: {
    loginStart: (state) => {},
    loginSuccess: (state, action) => {},
    loginFailure: (state) => {},
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
