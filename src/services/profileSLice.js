import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  image: '',
  following: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

    PROFILE_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    PROFILE_PAGE_LOADED: (state, action) => {
      const { username, image, following } = action.payload[0].profile
      state.username = username;
      state.image = image;
      state.following = following;
    },
    FOLLOW_USER: (state, action) => {
      const { username, image, following } = action.payload.profile
      state.username = username;
      state.image = image;
      state.following = following;
    },
    UNFOLLOW_USER: (state, action) => {
      const { username, image, following } = action.payload.profile
      state.username = username;
      state.image = image;
      state.following = following;
    }
  }
})

export default profileSlice.reducer
export const { PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED, FOLLOW_USER, UNFOLLOW_USER } = profileSlice.actions
