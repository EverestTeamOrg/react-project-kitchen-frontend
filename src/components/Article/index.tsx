import DOMPurify from 'dompurify';
import {marked} from 'marked';
import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";

import React, { useEffect, useState } from "react";
import { deleteArticleThunk, getArticleThunk, getCommentsForArticleThunk } from "../../services/thunks";
import { useHistory, useParams } from "react-router";

import ArticleActions from './ArticleActions';
import {
  ArticleBody,
  ArticlePage,
  ArticleTitle,
  ASide,
  AsideStickyContainer,
  PageBody,
  PageContent,
  ArticleText,
  ArticleTagsList,
  ArticleTag
} from '../StyledComponents/articlePageStyles';
import Modal from '../modal/modal';
import {SidebarRight} from '../StyledComponents/sidebar-information-styles';
import SidebarInformation from '../sidebar-information';
import { useAppDispatch, useAppSelector } from '../../services/hooks';

const texts = {
  title: "Удалить запись",
  text: 'Нажимая кнопку «Удалить запись», материал будет удален без возможности восстановления',
  button: 'Удалить запись'
}

type TArticleProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const Article: React.FC<TArticleProps> = (props) => {
  const dispatch = useAppDispatch();

  const {allArticles} = useAppSelector((state) => state.articleList);

  const {article} = useAppSelector((state: any) => state.article);
  const {currentUser} = useAppSelector((state: any) => state.common);
  const {comments} = useAppSelector((state) => state.article);
  const {commentErrors} = useAppSelector((state) => state.article);
  const params: { id: string } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (params.id) {
      dispatch(getArticleThunk(params.id));
      dispatch(getCommentsForArticleThunk(params.id));
    }
  }, [params.id]);

  if (!article || !article.slug) {
    return null;
  }

  const articleBody = DOMPurify.sanitize(article.body);
  const markup = {__html: marked(articleBody)};

  const canModify =
    currentUser && currentUser.username === article.author.username;

  const openModal = () => {
    setIsModalOpen(true);
  }

  const onClose = () => {
    setIsModalOpen(false);
  }

  const deleteArticle = () => {
    // e.preventDefault();
    dispatch(deleteArticleThunk(article.slug)).then(() => history.push("/"));
    setIsModalOpen(false);
  };

  const isTags = article.tagList.length === 0 ? "0px" : "24px";

  return (<>
    <ArticlePage>
      <PageBody>
        <PageContent>
          <ArticleActions onClick={openModal} canModify={canModify} article={article}/>

          <ArticleTitle>
            {article.title}
          </ArticleTitle>

          <ArticleMeta article={article}/>

          <ArticleBody>
            <ArticleText marginBottom={isTags} dangerouslySetInnerHTML={markup}></ArticleText>

            <ArticleTagsList>
              {article.tagList.map((tag: any) => {
                return (
                  <ArticleTag key={tag}>
                    {'#' + tag.replaceAll('#', '')}
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
          <AsideStickyContainer>
            <SidebarInformation sectionTitle="Свежие новости" articles={allArticles} keyName="createdAt"/>
          </AsideStickyContainer>
        </ASide>

      </PageBody>
    </ArticlePage>

    { isModalOpen &&
       <Modal deleteArticle={deleteArticle} title={texts.title} text={texts.text} button={texts.button} onClose={onClose} />

    }
  </>);
};

export default Article;
