import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
      name: "",
      id: "",
      isLoading: false, // optional
      isLogin: null,
    },
    reducers: {
      loginUser: (state, action) => {
        state.name = action.payload.response.name;
        state.id = action.payload.response.email;
        state.isLogin = true;
        console.log(state.name);
        console.log(state.id);
        console.log(state.isLogin);
      },
  
      clearUser: (state) => {
        state.name = "";
        state.id = "";
        state.isLogin = false;
      },
    },
  });

  export const {loginUser, clearUser} = userSlice.actions;
  export default userSlice.reducer;