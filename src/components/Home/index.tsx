import Banner from "./Banner";
import MainView from "./MainView";
import { FC, useEffect } from "react";
import Tags from "./Tags";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllArticlesThunk,
  getFeedArticlesThunk,
  getTagsThunk,
} from "../../services/thunks";

const Home: FC = () => {
  const { appName, token } = useSelector((state: any) => state.common);
  const { tags } = useSelector((state: any) => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFeedArticlesThunk());
    } else {
      dispatch(getAllArticlesThunk());
    }
    dispatch(getTagsThunk());
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
