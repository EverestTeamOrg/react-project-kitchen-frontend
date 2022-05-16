import {
  AsyncThunkPayloadCreator,
  createAsyncThunk as thunk,
} from "@reduxjs/toolkit";
import * as api from "../../api";

// payloadCreator
const pc = (
  apiRequest: (requestPayload?: any) => Promise<any>
): AsyncThunkPayloadCreator<any> => {
  return async (requestPayload: any = null, thunkAPI?: any) => {
    try {
      const response = requestPayload
        ? await apiRequest(requestPayload)
        : await apiRequest();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  };
};

export const loginThunk: any = thunk("LOGIN", pc(api.login));
export const signupThunk: any = thunk("SIGNUP", pc(api.signup));
export const authThunk: any = thunk("AUTH", pc(api.auth));
export const getAllArticles: any = thunk("GET_ALL_ARTICLES_FOR_SORT", pc(api.getAllArticles));
export const getFeedArticlesThunk: any = thunk("GET_FEED_ARTICLES", pc(api.getFeedArticles));
export const getTagsThunk: any = thunk("GET_TAGS", pc(api.getTags));
export const getProfileThunk: any = thunk("GET_PROFILE", pc(api.getProfile));
export const getArticlesByAuthorThunk: any = thunk("GET_ARTICLES_BY_AUTHOR", pc(api.getArticlesByAuthor));
export const getFavoritedArticlesThunk: any = thunk("GET_FAVORITE_ARTICLES", pc(api.getFavoritedArticles));
export const updateUserThunk: any = thunk("UPDATE_USER", pc(api.updateUser));
export const getArticleThunk: any = thunk("GET_ARTICLE", pc(api.getArticle));
export const getCommentsForArticleThunk: any = thunk("GET_COMMENTS_FOR_ARTICLE", pc(api.getCommentsForArticle));
export const createCommentThunk: any = thunk("CREATE_COMMENT", pc(api.createComment));
export const deleteCommentThunk: any = thunk("DELETE_COMMENT", pc(api.deleteComment));
export const deleteArticleThunk: any = thunk("DELETE_ARTICLE", pc(api.deleteArticle));
export const updateArticleThunk: any = thunk("UPDATE_ARTICLE", pc(api.updateArticle));
export const createArticleThunk: any = thunk("CREATE_ARTICLE", pc(api.createArticle));
export const getAllArticlesByTagThunk: any = thunk("GET_ARTICLES_BY_TAG", pc(api.getArticlesByTag));
export const setArticleAsFavoriteThunk: any = thunk("SET_ARTICLE_AS_FAVORITE", pc(api.setArticleAsFavorite));
export const deleteArticleAsFavoriteThunk: any = thunk("DELETE_ARTICLE_AS_FAVORITE_THUNK", pc(api.deleteArticleAsFavorite));
export const followUserThunk: any = thunk("FOLLOW_USER", pc(api.followUser));
export const unfollowUserThunk: any = thunk("UNFOLLOW_USER", pc(api.unfollowUser));

