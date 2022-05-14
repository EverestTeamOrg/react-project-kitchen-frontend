import DOMPurify from 'dompurify';
import {marked} from 'marked';
import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticleThunk, getArticleThunk, getCommentsForArticleThunk } from "../../services/thunks";
import { useHistory, useParams } from "react-router";
import ArticleActions from './ArticleActions';
import { ArticleBody, ArticlePage, ArticleTitle, ASide, PageBody, PageContent, ArticleText, ArticleTagsList, ArticleTag } from '../StyledComponents/articlePageStyles';
import Modal from '../modal/modal';

type TArticleProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const Article: React.FC<TArticleProps> = (props) => {
  const dispatch = useDispatch();
  const {article} = useSelector((state: any) => state.article);
  const {currentUser} = useSelector((state: any) => state.common);
  const {comments} = useSelector((state: any) => state.article);
  const {commentErrors} = useSelector((state: any) => state.article);
  const params: { id: string } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (params.id) {
      dispatch(getArticleThunk(params.id));
      dispatch(getCommentsForArticleThunk(params.id));
    }
  }, []);

  if (!article.slug) {
    return null;
  }

  const articleBody = DOMPurify.sanitize(article.body);
  const markup = {__html: marked(articleBody)};

  const canModify =
    currentUser && currentUser.username === article.author.username;

  const openModal = () => {
    setIsModalOpen(true);
  }

  const onClose = (e: any) => {
    e.preventDefault();

    setIsModalOpen(false);
  }

  const deleteArticle = (e: any) => {
    e.preventDefault();
    dispatch(deleteArticleThunk(article.slug)).then(() => history.push("/"));
    setIsModalOpen(false);
  };

  const isTags = article.tagList.length === 0 ? "0px" : "24px";


  console.log(article)

  return (<>
    <ArticlePage>
      <PageBody>
        <PageContent>
          <ArticleActions onClick={openModal} canModify={canModify} article={article} />

          <ArticleTitle>
            {article.title}
          </ArticleTitle>

          <ArticleMeta article={article} />

          <ArticleBody>
            <ArticleText marginBottom={isTags} dangerouslySetInnerHTML={markup}></ArticleText>

            <ArticleTagsList>
              {article.tagList.map((tag: any) => {
                return (
                  <ArticleTag key={tag}>
                    {`#${tag}`}
                  </ArticleTag>
                );
              })}
            </ArticleTagsList>
          </ArticleBody>

          <CommentContainer
            comments={comments || []}
            errors={commentErrors}
            slug={props.match.params.id}
            currentUser={currentUser}
          />

        </PageContent>

        <ASide>

        </ASide>

      </PageBody>
    </ArticlePage>

    { isModalOpen &&
      <Modal deleteArticle={deleteArticle} title={"Удалить запись"} onClose={onClose} />
    }
  </>);
};

export default Article;
