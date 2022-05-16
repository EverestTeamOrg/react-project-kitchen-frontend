import React from "react";

import {
  ArticleActionsEditor,
  ArticleActionsEditorIcon,
  ArticleActionsWrapper
} from "../StyledComponents/articleActionsStyles";

import plus from "../../images/whitePlus.svg";

import DeleteArticleBtn from "../DeleteArticleBtn";
import {useAppSelector} from "../../services/hooks";
import {TArticleProperties} from "../../services/types";

type TArticleActionsProps = {
  article: TArticleProperties;
  canModify: boolean;
  onClick: () => void;
};

const ArticleActions: React.FC<TArticleActionsProps> = (props) => {

  const {article} = useAppSelector((state) => state.article);

  if (props.canModify && article !== null) {
    return (

      <ArticleActionsWrapper>
        <ArticleActionsEditor
          to={`/editor/${article.slug}`}
        >
          <ArticleActionsEditorIcon src={plus}/>
          Редактировать запись
        </ArticleActionsEditor>

        <DeleteArticleBtn onClick={props.onClick} mrgTop="0px" text="Удалить запись"/>

      </ArticleActionsWrapper>
    );
  }
  return <span></span>;
};

export default ArticleActions;
