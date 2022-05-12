import React, {FunctionComponent} from "react";

import {
  ArticleLink,
  ArticleHeading,
  ArticleWrapper,
  AuthorWrapper
} from "./StyledComponents/sidebar-information-styles";
import ProfileInformationView from "./profile-information-view";
import Like from "./Article/like";
import like from "../images/like-icon.svg";
import {TArticleProperties} from "../services/types";
import {ArticleTooltip} from "./article-tooltip";

const ArticleSidebarView: FunctionComponent<{ article: TArticleProperties, articleDate: string }> = (props) => {
  return (
    <ArticleWrapper
      >
      <AuthorWrapper>
        <ProfileInformationView articleDate={props.articleDate} author={props.article.author}/>
        <Like counter={props.article.favoritesCount} icon={like}/>
      </AuthorWrapper>
      <ArticleLink to={`/article/${props.article.slug}`}>
        <ArticleHeading>{props.article.title}</ArticleHeading>
      </ArticleLink>
    </ArticleWrapper>
  )
}

export default ArticleSidebarView;
