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
import likeActive from "../images/like-active-icon.svg";
import {TArticleProperties} from "../services/types";
import {useAppSelector} from "../services/hooks";

const ArticleSidebarView: FunctionComponent<{ articleDate: string, article: TArticleProperties }> = (props) => {
  const {currentUser} = useAppSelector((store) => store.common)

  return (
    <ArticleWrapper padding="20px">
      <AuthorWrapper margin="12px">
        <ProfileInformationView articleDate={props.articleDate} author={props.article.author}/>
        <Like article={props.article}
              icon={`${props.article.favorited ? likeActive : like}`}/>
      </AuthorWrapper>
      <ArticleLink to={`/article/${props.article.slug}`}>
        <ArticleHeading fontSize="20px" lineHeight="24px" margin="0" lineHeightLap="22px" fontSizeLap="18px">{props.article.title}</ArticleHeading>
      </ArticleLink>
    </ArticleWrapper>
  )
}

export default ArticleSidebarView;
