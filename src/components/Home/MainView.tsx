import ArticleList from "../ArticleList";
import { FC, useState } from "react";
import { getAllArticlesThunk } from "../../services/thunks";
import { getAllArticles } from "../../api";
import { useAppSelector } from "../../services/hooks";


const MainView: FC = () => {
  const { articles, articlesCount, currentPage, pager } = useAppSelector(
    (state) => state.articleList
  );

  return (
      <ArticleList
        pager={pager}
        articles={articles}
        // loading={loading}
        articlesCount={articlesCount}
        currentPage={currentPage}
      />
  );
};

export default MainView;
