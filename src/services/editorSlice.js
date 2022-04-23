import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleSlug: "",
  title: "",
  description: "",
  image: "",
  body: "",
  tagInput: "",
  tagList: [],
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    EDITOR_PAGE_LOADED: (state, action) => {
      const { slug, title, description, image, body, tagList } =
      action.payload.article;
      
      state.articleSlug = slug;
      state.title = title;
      state.description = description;
      state.image = image;
      state.body = body;
      state.tagInput = "";
      state.tagList = tagList;
    },
    EDITOR_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    ADD_TAG: (state, action) => {
      state.tagList = state.tagList.concat([state.tagInput]);
      state.tagInput = "";
    },
    REMOVE_TAG: (state, action) => {
      state.tagList = state.tagList.filter((tag) => tag !== action.tag);
    },
    UPDATE_FIELD_EDITOR: (state, action) => {
      console.log({ ...state, [action.key]: action.value });
      state = { ...state, [action.key]: action.value };
    },
  },
});

export default editorSlice.reducer;
export const {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_FIELD_EDITOR,
} = editorSlice.actions;
