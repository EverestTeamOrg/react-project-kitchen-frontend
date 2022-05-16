import ArticlePreview from './ArticlePreview';
import React from 'react';
import Preloader from './Preloader'
import { ArticleWrapper } from "./StyledComponents/sidebar-information-styles";
import { ArcticleListContainer } from './StyledComponents/articleList/ArticleListStyles';
import { TArticleProperties} from "../services/types";
import { any } from 'prop-types';


type TArticleListProps = {
  articles: Array<TArticleProperties> | [];
}

const ArticleList: React.FC<TArticleListProps> = (props) => {
  return (
    <ArcticleListContainer>
    {!props.articles && (<Preloader />)}

    {props.articles.length === 0 && (
      <ArticleWrapper padding="20px">
        No articles are here... yet.
      </ArticleWrapper>)}

      {
        props.articles.map((article: TArticleProperties) => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }
    </ArcticleListContainer>
  );
};

export default ArticleList;
