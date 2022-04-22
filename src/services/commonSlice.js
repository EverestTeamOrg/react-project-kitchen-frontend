import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appName: "Practicum Project Kitchen",
  token: null,
  errors: null,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    APP_LOAD: (state, action) => {
      (state.token = action.token || null), (state.appLoaded = true);
      state.currentUser = action.payload ? action.payload.user : null;
    },
    REDIRECT: (state, action) => {
      state.redirectTo = null;
    },
    LOGOUT: (state, action) => {
      state.redirectTo = "/";
      state.token = null;
      state.currentUser = null;
    },
    ARTICLE_SUBMITTED: (state, action) => {
      state.redirectTo = `/article/${action.payload.article.slug}`;
    },
    SETTINGS_SAVED: (state, action) => {
      state.redirectTo = action.error ? null : "/";
      state.currentUser = action.error ? null : action.payload.user;
    },
    LOGIN: (state, action) => {
      state.redirectTo = action.error ? null : "/";
      state.token = action.error ? null : action.payload.user.token;
      state.currentUser = action.error ? null : action.payload.user;
    },
    REGISTER: (state, action) => {
      state.redirectTo = action.error ? null : "/";
      state.token = action.error ? null : action.payload.user.token;
      state.currentUser = action.error ? null : action.payload.user;
    },
    DELETE_ARTICLE: (state, action) => {
      state.redirectTo = "/";
    },
    ARTICLE_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
    EDITOR_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
    HOME_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
    PROFILE_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
    PROFILE_FAVORITES_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
    SETTINGS_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
    LOGIN_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
    REGISTER_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1;
    },
  },
});

export default commonSlice.reducer;
export const {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  ARTICLE_SUBMITTED,
  SETTINGS_SAVED,
  LOGIN,
  REGISTER,
  DELETE_ARTICLE,
  ARTICLE_PAGE_UNLOADED,
  EDITOR_PAGE_UNLOADED,
  HOME_PAGE_UNLOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED,
  SETTINGS_PAGE_UNLOADED,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
} = commonSlice.actions;
