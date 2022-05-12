import React, {FunctionComponent} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

import ProfileInformationView from "./profile-information-view";
import {composeCreatedDate} from "../utils/utils";
import {ArticleDescription} from "./StyledComponents/article-styles";
import {TooltipWrapper} from "./StyledComponents/article-tooltip-styles";
import {TArticleProperties} from "../services/types";

const tooltipRoot = document.getElementById("tooltip");

export const ArticleTooltip: FunctionComponent<{article: TArticleProperties}> = (props) => {
  // const {article} = useSelector((state: any) => state.article)

  if (tooltipRoot !== null) {
    return ReactDOM.createPortal(
      (
        <TooltipWrapper>
          <ProfileInformationView articleDate={composeCreatedDate(props.article.createdAt)} author={props.article.author}/>
          <Link to={`/article/${props.article.slug}`}>
            <ArticleDescription fontSize="16px" lineHeight="20px">{props.article.description}</ArticleDescription>
          </Link>
        </TooltipWrapper>
      ), tooltipRoot
    )
  } else return null
}
