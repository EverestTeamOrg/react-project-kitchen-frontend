import ArticleList from "../../components/ArticleList";
import ProfileHeader from "../../components/ProfileHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticlesByAuthorThunk, getProfileThunk } from "../../services/thunks";
import { profileSlice } from "../../services/profileSlice";
import * as Styles from "../../components/StyledComponents/profileStyles";
import {ArcticleListContainer} from '../../components/StyledComponents/articleList/ArticleListStyles';
import { ProfileText } from "../../components/StyledComponents/profileStyles";
import ArticlePreview  from "../../components/ArticlePreview"

import Preloader from "../../components/Preloader";

function Profile() {
  const dispatch = useDispatch();
  const { username, image, following, isLoading } = useSelector(
    (state: any) => state.profile
  );
  const { pager, articles, articlesCount, currentPage } = useSelector(
    (state: any) => state.articleList
  );

  const actionsProfile = profileSlice.actions;

  const params: { username: string; [key: string]: any } = useParams();

  useEffect(() => {
    if (params.username) {
      dispatch(getProfileThunk(params.username));
      dispatch(getArticlesByAuthorThunk({ author: params.username, page: 0 }));
    }
    return () => {
      actionsProfile.profilePageWasUnloaded();
    };
  }, [dispatch]);

  if (!username) {
    return null;
  }
  return (
    <>
      {isLoading && <Preloader />}

      <Styles.ProfileSection>
        <ProfileHeader profile={{ username, image, following }} />
        <ArcticleListContainer>
          {!articles && <Preloader />}

          {articles.length === 0 && (
            <ProfileText>
              У вас пока нет статей
            </ProfileText>
          )}

          {articles.map((article: any) => {
            return <ArticlePreview article={article} key={article.slug} />;
          })}

        </ArcticleListContainer>
      </Styles.ProfileSection>
    </>
  );
}

export default Profile;
