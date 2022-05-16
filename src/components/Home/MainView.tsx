import ArticleList from "../ArticleList";
import { FC } from "react";
import { useAppSelector } from "../../services/hooks";

const MainView: FC = () => {
  const { articles } = useAppSelector((state) => state.articleList);

  return <ArticleList articles={articles} />;
};

export default MainView;
