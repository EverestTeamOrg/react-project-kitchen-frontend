import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  currentArticle: {},
  articlesCount: 0,
  currentPage: 0,
  tab: null,
  tag: null,
  tags: [],
  pager: null,
};

export const articleListSlice = createSlice({
  name: "articleList",
  initialState,
  reducers: {
    ARTICLE_FAVORITED: (state, action) => {
      state.articles = state.articles.map((article) => {
        if (article.slug === action.payload.article.slug) {
          article.favorited = action.payload.article.favorited;
          article.favoritesCount = action.payload.article.favoritesCount;
        }
        return article;
      });
    },
    SET_PAGE: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = null;
      state.tag = action.tag;
      state.currentPage = 0;
    },
    APPLY_TAG_FILTER: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = null;
      state.tag = action.tag;
      state.currentPage = 0;
    },
    HOME_ARTICLE_LOADED: (state, action) => {
      state.pager = action.pager;
      state.tags = action.payload[0].tags;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.currentPage = 0;
      state.tab = action.tab;
    },
    HOME_ARTICLE_UNLOADED: (state, action) => {
      return {};
    },
    CHANGE_TAB: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = action.tab;
      state.currentPage = 0;
      state.tag = null;
    },
    PROFILE_ARTICLE_LOADED: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.currentPage = 0;
    },
    PROFILE_FAVORITES_ARTICLE_LOADED: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.currentPage = 0;
    },
    PROFILE_ARTICLE_UNLOADED: (state, action) => {
      return {};
    },
    PROFILE_FAVORITES_ARTICLE_UNLOADED: (state, action) => {
      return {};
    },
  },
});

export default articleListSlice.reducer;
export const {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_ARTICLE_LOADED,
  HOME_ARTICLE_UNLOADED,
  CHANGE_TAB,
  PROFILE_ARTICLE_LOADED,
  PROFILE_ARTICLE_UNLOADED,
  PROFILE_FAVORITES_ARTICLE_LOADED,
  PROFILE_FAVORITES_ARTICLE_UNLOADED,
} = articleListSlice.actions;
