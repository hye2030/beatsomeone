import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
      name: "",
      id: "",
      idx: 0,
      isLoading: false, // optional
      isLogin: null,
    },
    reducers: {
      loginUser: (state, action) => {
        state.name = action.payload.response.name;
        state.id = action.payload.response.email;
        state.idx = action.payload.response.idx;
        state.isLogin = true;
      },
  
      clearUser: (state) => {
        state.name = "";
        state.id = "";
        state.idx = 0;
        state.isLogin = false;
      },
    },
  });

  export const {loginUser, clearUser} = userSlice.actions;
  export default userSlice.reducer;