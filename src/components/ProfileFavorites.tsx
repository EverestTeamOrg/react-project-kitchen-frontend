import { mapStateToProps } from './Profile';
import ProfileHeader from './ProfileHeader';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../constants/actionTypes';
import ArticleList from './ArticleList';
import { getFavoritedArticles } from '../api';
import { getProfile } from '../api';
import RenderTabs from "./RenderTabs";

export type TProfileProps = {
  profile: {
    following: boolean;
    image: string;
    username: string;
    bio: string;
  };
  currentUser: {
    email: string;
    token: string;
    username: string;
  };
  onLoad: any;
  onUnload: any;
  onFollow: any;
  onUnfollow: any;
  match: {
    isExact: boolean;
    path: string;
    url: string;
    params:{username: string;}
  };
  pager: {
    length: number;
    name: string;
  };
  articles: Array<any>;
  articlesCount: number;
  currentPage: number
}

const mapDispatchToProps = (dispatch: any) => ({
  onLoad: (pager: any, payload: any) =>
    dispatch({ type: PROFILE_PAGE_LOADED, pager, payload }),
  onUnload: () =>
    dispatch({ type: PROFILE_PAGE_UNLOADED })
});

function ProfileFavorites(props: TProfileProps) {

  const profile = props.profile;
  const isUser = props.currentUser &&
    props.profile.username === props.currentUser.username;

  useEffect(() => {
    // props.onLoad((page: any) => agent.Articles.favoritedBy(props.match.params.username, page), Promise.all([
    props.onLoad((page: any) => getFavoritedArticles(props.match.params.username, page), Promise.all([
      // agent.Profile.get(props.match.params.username),
      // agent.Articles.favoritedBy(props.match.params.username)
      getProfile(props.match.params.username),
      getFavoritedArticles(props.match.params.username)
    ]));

    return () => {
      props.onUnload();
    }
  }, [])


  if (!profile) {
    return null;
  }
  return (
    <div className="profile-page">
      <ProfileHeader
        profile={profile}
        isUser={isUser}
        follow={props.onFollow}
        unfollow={props.onUnfollow}
      />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <RenderTabs username={profile.username} />
            </div>
            <ArticleList
              pager={props.pager}
              articles={props.articles}
              articlesCount={props.articlesCount}
              state={props.currentPage} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavorites);
