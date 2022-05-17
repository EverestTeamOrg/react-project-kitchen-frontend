import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  getArticleThunk,
  deleteArticleThunk,
  updateArticleThunk,
  createArticleThunk,
  createCommentThunk,
  deleteCommentThunk,
  getCommentsForArticleThunk,
} from "./thunks";
import {TArticle, TArticleProperties, TCommentProperties, TComments} from "./types";

interface IInitialState {
  article: TArticleProperties | null,
  comments: Array<TCommentProperties> | null,
  commentErrors: { [key: string]: string } | null,
  inProgress: boolean
}

const initialState: IInitialState = {
  article: null,
  comments: null,
  commentErrors: null,
  inProgress: false
};

const setArticle = (state: IInitialState, action: PayloadAction<TArticle>) => {
  if (action.payload?.article) {
    state.article = action.payload.article;
  }
  state.inProgress = false;
};

const setCommentsForArticle = (state: IInitialState, action: PayloadAction<TComments>) => {
  state.comments = action.payload.comments;
};

const addComment = (state: IInitialState, action: PayloadAction<{comment: TCommentProperties}>) => {
  state.commentErrors = null,
  state.comments = (state.comments || []).concat([action.payload.comment])
};

const deleteComment = (state: IInitialState, action: PayloadAction<{commentId: string}>) => {
  if (state.comments !== null) {
    state.comments = state.comments.filter(comment => comment.id !== action.payload.commentId)
  }
}

const addCommentErrors = (state: IInitialState, action: PayloadAction<any>) => {
  state.commentErrors = action.payload.errors,
  state.comments = initialState.comments
}

const setInProgressTrue = (state: IInitialState) => {
  state.inProgress = true;
};

const setInProgressFalse = (state: IInitialState) => {
  state.inProgress = false;
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    clearArticle: (state) => {
      state.article = null;
    },
    setArticleLike: (state: IInitialState, action: PayloadAction<boolean>) => {
      if (state.article!== null) {
        state.article.favorited = action.payload;
        if (action.payload) {
          state.article.favoritesCount++;
        } else {
          state.article.favoritesCount--;
        }
      }
    }
  },

  extraReducers: {
    [createArticleThunk.pending]: setInProgressTrue,
    [createArticleThunk.fulfilled]: setArticle,
    [createArticleThunk.rejected]: setInProgressFalse,

    [updateArticleThunk.pending]: setInProgressTrue,
    [updateArticleThunk.fulfilled]: setArticle,
    [updateArticleThunk.rejected]: setInProgressFalse,

    [getArticleThunk.fulfilled]: setArticle,
    [deleteArticleThunk.fulfilled]: (state) => {
      state.article = null;
    },
    [createCommentThunk.fulfilled]: addComment,
    [createCommentThunk.rejected]: addCommentErrors,
    [deleteCommentThunk.fulfilled]: deleteComment,
    [getCommentsForArticleThunk.fulfilled]: setCommentsForArticle,
  },
});

export default articleSlice.reducer;
export const { clearArticle } = articleSlice.actions;
