import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { loginThunk, signupThunk } from "./thunks";

interface IInitialState {
  inProgress: boolean,
}

const initialState: IInitialState = {
  inProgress: false
};

const setInProgressTrue = (state: IInitialState) => {
  state.inProgress = true;
};

const setInProgressFalse = (state: IInitialState) => {
  state.inProgress = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    pageWasUnloaded: (state) => initialState,
  },
  extraReducers: {
    [loginThunk.pending]: setInProgressTrue,
    [loginThunk.rejected]: setInProgressFalse,
    [loginThunk.fulfilled]: setInProgressFalse,
    [signupThunk.pending]: setInProgressTrue,
    [signupThunk.rejected]: setInProgressFalse,
    [signupThunk.fulfilled]: setInProgressFalse,
  },
});

export default authSlice.reducer;
export const { pageWasUnloaded } = authSlice.actions;
