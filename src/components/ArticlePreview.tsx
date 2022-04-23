import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
import { setArticleAsFavorite, deleteArticleAsFavorite } from '../api';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = (dispatch: any) => ({
  favorite: (slug: any) => dispatch({
    type: ARTICLE_FAVORITED,
    // payload: agent.Articles.favorite(slug)
    payload: setArticleAsFavorite(slug)
  }),
  unfavorite: (slug: any) => dispatch({
    type: ARTICLE_UNFAVORITED,
    // payload: agent.Articles.unfavorite(slug)
    payload: deleteArticleAsFavorite(slug)
  })
});

interface TArticlePreviewProps  {
  article: any;
  unfavorite: (arg0: any) => void;
  favorite: (arg0: any) => void;
}

const ArticlePreview: React.FC<TArticlePreviewProps> = (props) => {
  const { article } = props
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;



const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

 

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>

        <div className="info">
          <Link className="author" to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className={favoriteButtonClass} onClick={handleClick}>
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {
            article.tagList.map((tag: any) => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              )
            })
          }
        </ul>
      </Link>
    </div>
  );
}


export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
