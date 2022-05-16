import FollowUserButton from './FollowUserButton';
import * as Styles from "./StyledComponents/profileHeaderStyles";
import { useAppSelector } from '../services/hooks';
import { TProfileHeader } from '../services/types';

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
