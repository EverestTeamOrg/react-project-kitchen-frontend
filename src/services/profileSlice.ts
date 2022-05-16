import { createSlice } from "@reduxjs/toolkit";
import { followUserThunk, getProfileThunk, unfollowUserThunk } from "./thunks";
import {TUserProfile} from "./types";

export const initialState: TUserProfile = {
  username: "",
  image: "",
  following: false,
  bio: "",
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profilePageWasUnloaded: (state: TUserProfile) => {
      return initialState;
    },
  },

  extraReducers: {
    [getProfileThunk.fulfilled]: (state: TUserProfile , action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
    },

    [followUserThunk.pending] : (state: TUserProfile ) => {
      state.isLoading = true;
    },
    [followUserThunk.fulfilled] : (state: TUserProfile , action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
      state.isLoading = false;
    },
    [followUserThunk.rejected] : (state: TUserProfile ) => {
      state.isLoading = false;
    },

    [unfollowUserThunk.pending] : (state: TUserProfile ) => {
      state.isLoading = true;
    },
    [unfollowUserThunk.fulfilled] : (state: TUserProfile , action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
      state.isLoading = false;
    },
    [unfollowUserThunk.rejected] : (state: TUserProfile ) => {
      state.isLoading = false;
    },
  },
});

export default profileSlice.reducer;
export const {
  profilePageWasUnloaded,
} = profileSlice.actions;
