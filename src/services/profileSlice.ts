import { createSlice } from "@reduxjs/toolkit";
import { followUserThunk, getProfileThunk, unfollowUserThunk } from "./thunks";
import {TUserProfileProperties} from "./types";

export const initialState: TUserProfileProperties = {
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
    profilePageWasUnloaded: (state: TUserProfileProperties) => {
      return initialState;
    },
  },

  extraReducers: {
    [getProfileThunk.fulfilled]: (state: TUserProfileProperties , action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
    },

    [followUserThunk.pending] : (state: TUserProfileProperties ) => {
      state.isLoading = true;
    },
    [followUserThunk.fulfilled] : (state: TUserProfileProperties , action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
      state.isLoading = false;
    },
    [followUserThunk.rejected] : (state: TUserProfileProperties ) => {
      state.isLoading = false;
    },

    [unfollowUserThunk.pending] : (state: TUserProfileProperties ) => {
      state.isLoading = true;
    },
    [unfollowUserThunk.fulfilled] : (state: TUserProfileProperties , action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
      state.isLoading = false;
    },
    [unfollowUserThunk.rejected] : (state: TUserProfileProperties ) => {
      state.isLoading = false;
    },
  },
});

export default profileSlice.reducer;
export const {
  profilePageWasUnloaded,
} = profileSlice.actions;
