import React from "react";
import {composeCreatedDate} from "../utils/utils";
import {TArticleProperties} from "../services/types";

import {
  ArticleBody,
  AdditionalInfo,
  ArticleWrapper,
  ReadMoreLink,
  Tagslist,
  ArticleTag,
  ArticleText,
  ArticleImg,
  ArticleHeading,
} from './StyledComponents/ArticlePreviewStyles'
import { AuthorWrapper } from "./StyledComponents/sidebar-information-styles";
import ProfileInformationView from "./profile-information-view";
import Like from "./Article/like";
import like from "../images/like-icon.svg";
import likeActive from "../images/like-active-icon.svg";
import {useAppSelector} from "../services/hooks";
import {articleSlice} from "../services/articleSlice";

const FAVORITED_CLASS = "btn btn-sm btn-primary";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary";


const ArticlePreview: React.FC<{ article: TArticleProperties } > = (props) => {

  const {article} = props;
  // const favoriteButtonClass = article.favorited
  //   ? FAVORITED_CLASS
  //   : NOT_FAVORITED_CLASS;

  // const handleClick = (e: React.SyntheticEvent) => {
  //   if (article.favorited) {
  //     dispatch(deleteArticleAsFavoriteThunk(article.slug));
  //   } else {
  //     dispatch(setArticleAsFavoriteThunk(article.slug));
  //   }
  // };


  return (
    <ArticleWrapper>
      <AuthorWrapper margin="16px">
        <ProfileInformationView articleDate={composeCreatedDate(article.createdAt)} author={article.author}/>
        <Like article={article}
              icon={`${props.article.favorited ? likeActive : like}`}
              isButton={true}/>
      </AuthorWrapper>
      <ArticleHeading >{article.title}</ArticleHeading>
      <ArticleBody>
        {article.image && (<ArticleImg urlImg={`${article.image}`}/>)}
        <ArticleText fontSizeLap="16px" lineHeightLap="20px">{article.body}</ArticleText>
      </ArticleBody>
      <AdditionalInfo>
        <ReadMoreLink to={`/article/${article.slug}`}>Читать дальше</ReadMoreLink>
        <Tagslist>
          {article.tagList.map((tag: any, i: number) => {
            return (
              <ArticleTag key={i}>
                {'#' + tag.replaceAll('#', '')}
              </ArticleTag>
            );
          })}
        </Tagslist>
      </AdditionalInfo>
    </ArticleWrapper>
  );
};

export default ArticlePreview;
