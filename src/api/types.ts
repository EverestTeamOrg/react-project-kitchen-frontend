export interface IUserLogin {
  image: string;
  username: string;
  email: string;
  password: string;
}

export interface IArticleRes {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: any[];
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    image: string;
    following: boolean;
  };
}

export enum ApiEnums {
  BASE_URL = "http://localhost:3000/api",
}
