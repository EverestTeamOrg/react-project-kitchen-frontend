import axios, { AxiosResponse } from "axios";
import { IArticleRes, IUserLogin, ApiEnums } from "./types";

// set token on every request
export const setTokenAxios = (_token: string) => {
  axios.defaults.headers.common["Authorization"] = `Token ${_token}`;
};

// Tags
export const getTags = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/tags`
  );
  return response.data;
};

// Auth
export const login = async (email: string, password: string): Promise<any> => {
  const response: AxiosResponse<IUserLogin> = await axios.post(
    `${ApiEnums.BASE_URL}/users/login`,
    { user: { email, password } }
  );
  return response.data;
};

export const signup = async (
  username: string,
  email: string,
  password: string
): Promise<any> => {
  const response: AxiosResponse<IUserLogin> = await axios.post(
    `${ApiEnums.BASE_URL}/users`,
    {
      user: { username, email, password },
    }
  );
  return response.data;
};

export const auth = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/user`
  );
  return response.data;
};

export const updateUser = async (user: IUserLogin): Promise<any> => {
  const response: AxiosResponse<IUserLogin> = await axios.put(
    `${ApiEnums.BASE_URL}/user`,
    {
      user,
    }
  );
  return response.data;
};

// Articles
export const getAllArticles = async (page: number = 0): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/articles`,
    {
      params: {
        limit: 10,
        offset: page,
      },
    }
  );
  return response.data;
};

export const getArticlesByAuthor = async (
  author: string,
  page: number = 0
): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/articles`,
    {
      params: {
        limit: 5,
        offset: page,
        author,
      },
    }
  );
  return response.data;
};

export const getArticlesByTag = async (
  tag: string,
  page: number = 0
): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/articles`,
    {
      params: {
        limit: 10,
        offset: page,
        tag,
      },
    }
  );
  return response.data;
};

export const deleteArticle = async (slug: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.delete(
    `${ApiEnums.BASE_URL}/articles/${slug}`
  );
  return response.data;
};

// 500. разобраться что за хрень
export const setArticleAsFavorite = async (slug: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.post(
    `${ApiEnums.BASE_URL}/articles/${slug}/favorite`
  );
  return response.data;
};

export const getFavoritedArticles = async (
  author: string,
  page: number = 0
): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/articles`,
    {
      params: {
        favorited: author,
        limit: 5,
        offset: page,
      },
    }
  );
  return response.data;
};

export const getFeedArticles = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/articles/feed`,
    {
      params: {
        limit: 10,
        offset: 0,
      },
    }
  );
  return response.data;
};

export const getArticle = async (slug: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/articles/${slug}`
  );
  return response.data;
};

export const deleteArticleAsFavorite = async (slug: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.delete(
    `${ApiEnums.BASE_URL}/articles/${slug}/favorite`
  );
  return response.data;
};

export const updateArticle = async (article: any): Promise<IArticleRes> => {
  const response: AxiosResponse<IArticleRes> = await axios.put(
    `${ApiEnums.BASE_URL}/articles/${article.slug}`,
    {
      article: { ...article, slug: undefined },
    }
  );
  return response.data;
};

export const createArticle = async (article: any): Promise<IArticleRes> => {
  const response: AxiosResponse<IArticleRes> = await axios.post(
    `${ApiEnums.BASE_URL}/articles`,
    { article }
  );
  return response.data;
};

// Comments

// 500
export const createComment = async (
  slug: string,
  comment: { body: string }
): Promise<any> => {
  const response: AxiosResponse<any> = await axios.post(
    `${ApiEnums.BASE_URL}/articles/${slug}/comments`,
    { comment }
  );
  return response.data;
};

export const deleteComment = async (
  slug: string,
  commentId: string | number
): Promise<any> => {
  const response: AxiosResponse<any> = await axios.delete(
    `${ApiEnums.BASE_URL}/articles/${slug}/comments/${commentId}`
  );
  return response.data;
};

export const getCommentsForArticle = async (slug: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/articles/${slug}/comments`
  );
  return response.data;
};

// Profile
export const followUser = async (userName: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.post(
    `${ApiEnums.BASE_URL}/profiles/${userName}/follow`
  );
  return response.data;
};

export const getProfile = async (userName: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    `${ApiEnums.BASE_URL}/profiles/${userName}`
  );
  return response.data;
};

export const unfollowUser = async (userName: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.delete(
    `${ApiEnums.BASE_URL}/profiles/${userName}/follow`
  );
  return response.data;
};
