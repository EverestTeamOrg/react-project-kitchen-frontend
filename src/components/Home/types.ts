import {TArticleProperties} from "../../services/types";

export type THomeProps = {
  currentUser: {
    token: string;
    username: string;
  };
  onLoad: boolean;
  onUnload: boolean;

  pager: TPager;
  articles: Array<TArticleProperties>;
}

export type TPager = {
  length: number;
  name: string;
}
