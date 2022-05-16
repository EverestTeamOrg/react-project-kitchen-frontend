import React, {FunctionComponent, useCallback} from "react";

import {SidebarHeading, SidebarVisibleBlock} from "./StyledComponents/sidebar-information-styles";
import ArticleSidebarView from "./article-sidebar-view";
import {TArticleProperties} from "../services/types";
import {composeCreatedDate, sortArrayOfObjects} from "../utils/utils";
import {SidebarSlider} from "./sidebar-slider";

const SidebarInformation: FunctionComponent<{ sectionTitle: string, articles: Array<TArticleProperties>, keyName: string }> = (props) => {
  let articlesArrayForSort;

  // копируем иммутабельный массив из состояния дл ятого, чтобы отсортировать его. Сортировка не возвращает новое значение, а сортирует прямо на месте!
  articlesArrayForSort = [...props.articles];
  articlesArrayForSort = sortArrayOfObjects(articlesArrayForSort, props.keyName)
    .slice(0, 5);

  return (
    <>
      <SidebarHeading>{props.sectionTitle}</SidebarHeading>
      <SidebarVisibleBlock>
        {
          articlesArrayForSort.map((article, index) => (
            <ArticleSidebarView
            key={index} article={article}
            articleDate={composeCreatedDate(article.createdAt)}/>

          ))
        }
      </SidebarVisibleBlock>

      <SidebarSlider articles={articlesArrayForSort}/>
    </>
  )
}


export default SidebarInformation;
