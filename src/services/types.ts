export type TUser = {
  email: string,
  username: string,
  image: string,
  following?: boolean,
  bio?: string,
  isLoading?: boolean,
}

export type TUserProfileProperties = Omit<TUser, "email">


export type TUserProfile = {
  profile: TUser
}

export type TArticleProperties = {
  author: TUser,
  body: string,
  createdAt: string,
  description: string,
  favorited: boolean,
  favoritesCount: number,
  slug: string,
  tagList: Array<string> | [],
  title: string,
  updatedAt?: string,
  image?: string,
}

export type TEditingArticleProperties = {
  tagInput: string,
  slug: string,
  title: string,
  description: string,
  image: string,
  body: string,
  tagList: Array<string> | []
}

export type TArticle = {
  article: TArticleProperties
}

export type TEditingArticle = {
  article: TEditingArticleProperties
}

export type TCommentProperties = {
  author: TUser,
  body: string,
  createdAt: string,
  id: string
}

export enum textsForModal {
  Title = 'Удалить запись',
  Text = 'При нажатии кнопки «Удалить запись» материал будет удален без возможности восстановления',
  Button = 'Удалить запись'
}

export type ErrorResponse = {
  email?: string;
  password?: string;
  username?: string;
}

export type ErrorResponseLogin = ErrorResponse & {
  'email or password'?: string;
}

export type TComments = {
  comments: Array<TCommentProperties>
}
