import Banner from "../../components/Home/Banner";
import MainView from "../../components/Home/MainView";
import { FC, useEffect } from "react";
import Tags from "../../components/Home/Tags";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllArticlesThunk,
  getFeedArticlesThunk,
  getTagsThunk,
} from "../../services/thunks";
import {homeSlice} from "../../services/homeSlice";

const Home: FC = () => {
  const { appName, token } = useSelector((state: any) => state.common);
  const { tags } = useSelector((state: any) => state.home);

  const dispatch = useDispatch();

  const actionsHome = homeSlice.actions;

  useEffect(() => {
    if (token) {
      dispatch(getFeedArticlesThunk());
    } else {
      dispatch(getAllArticlesThunk());
    }
    dispatch(getTagsThunk());
    return () => {
      dispatch(actionsHome.homePageWasUnloaded());
    }
  }, []);

  return (
    <div className="home-page">
      <Banner token={token} appName={appName} />
      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <Tags
                tags={tags}
                onClickTag={(
                  tag: string,
                  pager: (page: any) => {},
                  payload: any
                ) => ({})}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
