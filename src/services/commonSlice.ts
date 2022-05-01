import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { authThunk, loginThunk, signupThunk, updateUserThunk } from "./thunks";

interface IInitialState {
  appName: string,
  token: string | null,
  // errors: null | any, // TODO: уточнить типы
  isLoggedIn: boolean,
  currentUser: {
    email: string,
    // token: localStorage.getItem('jwt') ? localStorage.getItem('jwt') : "",
    bio: string,
    username: string,
    image: string,
  }
}

const initialState: IInitialState = {
  appName: "Practicum Project Kitchen",
  token: localStorage.getItem("jwt") ? localStorage.getItem("jwt") : null,
  // errors: null,
  isLoggedIn: false,
  currentUser: {
    email: "",
    // token: localStorage.getItem('jwt') ? localStorage.getItem('jwt') : "",
    bio: "",
    username: "",
    image: "",
  },
}

const setUserRejected = (state: IInitialState) => {
  state.isLoggedIn = false;
  state.token = null;
};

const setUserFulfilled = (state: IInitialState, action: PayloadAction<{user: any}>) => { //TODO: тип для бзера
  if (action.payload?.user) {
    const { token, ...rest } = action.payload.user;
    state.currentUser = { ...state.currentUser, ...rest };
    state.isLoggedIn = true;
    state.token = token;
  } else {
    state.isLoggedIn = false;
    state.token = null;
  }
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
      state.currentUser = {
        email: "",
        bio: "",
        username: "",
        image: "",
      };
    },
  },
  extraReducers: {
    [authThunk.fulfilled]: setUserFulfilled,
    [loginThunk.fulfilled]: setUserFulfilled,
    [signupThunk.fulfilled]: setUserFulfilled,
    [updateUserThunk.fulfilled]: setUserFulfilled,

    [authThunk.rejected]: setUserRejected,
    [loginThunk.rejected]: setUserRejected,
    [signupThunk.rejected]: setUserRejected,
    [updateUserThunk.rejected]: setUserRejected,
  },
});

export default commonSlice.reducer;
export const { logout } = commonSlice.actions;
