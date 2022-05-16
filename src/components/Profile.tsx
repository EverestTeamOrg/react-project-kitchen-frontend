import ArticleList from "./ArticleList";
import ProfileHeader from "./ProfileHeader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getArticlesByAuthorThunk,
  getProfileThunk,
} from "../services/thunks";
import { profileSlice } from "../services/profileSlice";
import * as Styles from "./StyledComponents/profileStyles";
import Preloader from "./Preloader";
import { useAppDispatch, useAppSelector } from "../services/hooks";

function Profile() {
  const dispatch = useAppDispatch();
  const { username, image, following, isLoading } = useAppSelector(
    (state) => state.profile
  );
  const { pager, articles, articlesCount, currentPage } = useAppSelector(
    (state) => state.articleList
  );

  const actionsProfile = profileSlice.actions;

  const params: { username: string;[key: string]: any } = useParams();

  useEffect(() => {
    if (params.username) {
      dispatch(getProfileThunk(params.username));
      dispatch(getArticlesByAuthorThunk({ author: params.username, page: 0 }));
    }
    return () => {
      actionsProfile.profilePageWasUnloaded();
    }
  }, [dispatch]);

  if (!username) {
    return null;
  }
  return (
    <>
    {(isLoading && <Preloader />)}

    <Styles.ProfileSection>
      <ProfileHeader
        profile={{ username, image, following }}
      />
    </Styles.ProfileSection>
    </>
  );
}

export default Profile;
