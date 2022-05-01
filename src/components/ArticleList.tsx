import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';

interface TArticleListProps {
  articles: any;
  pager?: any;
  articlesCount?: any;
  loading?: boolean;
  state?: any;
  currentPage?: any;
  tab?: any;
}

const ArticleList: React.FC<TArticleListProps> = (props) => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
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
    </div>
  );
};

export default ArticleList;
