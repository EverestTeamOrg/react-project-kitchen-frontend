import EditProfileSettings from './EditProfileSettings';
import FollowUserButton from './FollowUserButton';
import * as Styles from "./StyledComponents/profileHeaderStyles";
import { logout as logoutAction } from "../services/commonSlice";
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../services/hooks';
//Рефактор type!
type TProfileHeader = {
  profile: {
    following: boolean;
    image: string;
    username: string;
  };
  follow?: any;
  unfollow?: any;
}

function ProfileHeader({ profile, follow, unfollow }: TProfileHeader) {

  const { currentUser } = useAppSelector((state) => state.common);


  const isUser = currentUser &&
    profile.username === currentUser.username;

  return (
    <Styles.headerPrfContainer>
      <Styles.userImageContainer>
        <Styles.profileImage src={profile.image} alt="" />
      </Styles.userImageContainer>
      <Styles.headerPrfTitle>{profile.username}</Styles.headerPrfTitle>

      { !isUser &&
      <FollowUserButton
        isUser={isUser}
        user={profile}
        follow={follow}
        unfollow={unfollow}
      />}
    </Styles.headerPrfContainer>
  )
}

export default ProfileHeader
