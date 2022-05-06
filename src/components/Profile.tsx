import ArticleList from "./ArticleList";
import ProfileHeader from "./ProfileHeader";
import RenderTabs from "./RenderTabs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import {
  getArticlesByAuthorThunk,
  getFavoritedArticlesThunk,
  getProfileThunk,
} from "../services/thunks";
import { profileSlice } from "../services/profileSlice";
import * as Styles from "./StyledComponents/profileStyles";

// export type TProfileProps = {
//   match: {
//     isExact: boolean;
//     path: string;
//     url: string;
//     params: { username: string; }
//   };
// }

function Profile() {
  const dispatch = useDispatch();
  const { username, image, following, bio } = useSelector(
    (state: any) => state.profile
  );
  const { pager, articles, articlesCount, currentPage } = useSelector(
    (state: any) => state.articleList
  );

  const actionsProfile = profileSlice.actions;

  const params: { username: string;[key: string]: any } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("favorites")) {
      dispatch(getFavoritedArticlesThunk({ author: params.username, page: 0 }));
    } else {
      dispatch(getArticlesByAuthorThunk({ author: params.username, page: 0 }));
    }
  }, [pathname]);

  useEffect(() => {
    if (params.username) {
      dispatch(getProfileThunk(params.username));
      dispatch(getArticlesByAuthorThunk({ author: params.username, page: 0 }));
    }
    return () => {
      actionsProfile.profilePageWasUnloaded();
    }
  }, []);

  if (!username) {
    return null;
  }
  return (
    <Styles.ProfileSection>
      <ProfileHeader
        profile={{ username, image, following, bio }}
      />
    </Styles.ProfileSection>
    // <div className="profile-page">
    //   <ProfileHeader
    //     //Понять что за bio и откуда оно берется, в ответе сервера его нет.
    //     profile={{ username, image, following, bio }}
    //   />
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xs-12 col-md-10 offset-md-1">
    //         <div className="articles-toggle">
    //           <RenderTabs username={username} />
    //         </div>
    //         <ArticleList
    //           pager={pager}
    //           articles={articles}
    //           articlesCount={articlesCount}
    //           state={currentPage}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Profile;
