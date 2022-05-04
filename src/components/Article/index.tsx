import DOMPurify from 'dompurify';
import ArticleMeta from './ArticleMeta';
import CommentContainer from './CommentContainer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { marked } from 'marked';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED} from '../../services/articleSlice';
import { getArticle, getCommentsForArticle } from '../../api';

type TArticleProps = {
  match: {
    params: {
      id: string;
    };
  };
}

const Article: React.FC<TArticleProps> = (props) => {
  const dispatch = useDispatch();

  const { article } = useSelector((state: any) => state.article);
  const { currentUser } = useSelector((state: any) => state.common);
  const { comments } = useSelector((state: any) => state.article);
  const { commentErrors } = useSelector((state: any) => state.article);

  // const onLoad = (payload: any) => {
  //   return dispatch(ARTICLE_PAGE_LOADED(payload))
  // }

  // const onUnload = () => {
  //   return dispatch(ARTICLE_PAGE_UNLOADED())
  // }

  useEffect(() => {
    dispatch(ARTICLE_PAGE_LOADED(Promise.all([
      getArticle(props.match.params.id),
      getCommentsForArticle(props.match.params.id)
    ])))

    return () => {
      dispatch(ARTICLE_PAGE_UNLOADED());
    };
  }, []);

  if (Object.keys(article).length === 0) {
    return null;
  }

  const articleBody = DOMPurify.sanitize(article.body);
  const markup  = { __html: marked(articleBody)};

  const canModify = currentUser && currentUser.username === article.author.username;

  return (
    <div className="article-page">

      <div className="banner">
        <div className="container">

          <h1>{article.title}</h1>
          <ArticleMeta
            article={article}
            canModify={canModify} />

        </div>
      </div>

      <div className="container page">

        <div className="row article-content">
          <div className="col-xs-12">

            <div dangerouslySetInnerHTML={markup}></div>

            <ul className="tag-list">
              {
                article.tagList.map((tag: any) => {
                  return (
                    <li
                      className="tag-default tag-pill tag-outline"
                      key={tag}>
                      {tag}
                    </li>
                  );
                })
              }
            </ul>

          </div>
        </div>

        <hr />

        <div className="article-actions">
        </div>

        <div className="row">
          <CommentContainer
            comments={comments || []}
            errors={commentErrors}
            slug={props.match.params.id}
            currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default Article;
