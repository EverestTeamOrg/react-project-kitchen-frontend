import MainView from "../../components/Home/MainView";
import {FC, useEffect} from "react";
import Tags from "../../components/Home/Tags";
import {
  getAllArticlesForSortThunk,
  getAllArticlesThunk,
  getTagsThunk,
} from "../../services/thunks";
import {homeSlice} from "../../services/homeSlice";
import SidebarInformation from "../../components/sidebar-information";
import {HomePageSection} from "../../components/StyledComponents/homepage/homepageStyles";
import {SidebarRight, StickyContainer} from "../../components/StyledComponents/sidebar-information-styles";
import {TagsTitle} from "../../components/StyledComponents/home-page-styles";
import { useAppDispatch, useAppSelector } from "../../services/hooks";

const Home: FC = () => {
  const {tags} = useAppSelector((state) => state.home);
  const {allArticles} = useAppSelector((state) => state.articleList);
  const dispatch = useAppDispatch();

  const actionsHome = homeSlice.actions;

  useEffect(() => {
    dispatch(getAllArticlesForSortThunk());
    dispatch(getAllArticlesThunk());
    dispatch(getTagsThunk());
    return () => {
      dispatch(actionsHome.homePageWasUnloaded());
    };
  }, []);

  return (
    <HomePageSection>
      <MainView/>
      <SidebarRight>
        <StickyContainer>
          <TagsTitle>Популярные теги</TagsTitle>
          <Tags
            tags={tags}
            onClickTag={(
              tag: string,
              pager: (page: any) => {},
              payload: any
            ) => ({})}
          />
          <SidebarInformation sectionTitle="Популярные материалы" articles={allArticles} keyName='favoritesCount'/>
        </StickyContainer>
      </SidebarRight>
    </HomePageSection>
  );
};

export default Home;
