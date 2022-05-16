import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';
import Preloader from './Preloader'
import { ArticleWrapper } from "./StyledComponents/sidebar-information-styles";
import { ArcticleListContainer } from './StyledComponents/articleList/ArticleListStyles';
import { TArticleProperties} from "../services/types";
import { any } from 'prop-types';


type TArticleListProps = {
  articles: Array<TArticleProperties> | [];
  pager?: any;
  articlesCount?: number;
  loading?: boolean;
  currentPage?: any;
  state?: any;
  tab?: null | string;
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
        props.articles.map((article: any) => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </ArcticleListContainer>
  );
};

export default ArticleList;
