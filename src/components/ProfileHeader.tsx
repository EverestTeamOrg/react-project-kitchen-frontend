import { useDispatch, useSelector } from 'react-redux';
import EditProfileSettings from './EditProfileSettings';
import FollowUserButton from './FollowUserButton';
import * as Styles from "./StyledComponents/profileHeaderStyles";
import { logout as logoutAction } from "../services/commonSlice";
import { useHistory } from 'react-router-dom';
//Рефактор type!
type TProfileHeader = {
  profile: {
    following: boolean;
    image: string;
    username: string;
    bio: string;
  };
  follow?: any;
  unfollow?: any;
}

function ProfileHeader({ profile, follow, unfollow }: TProfileHeader) {

  //Для кнопки logout. Удалить вместе с ней.
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const logout = () => {
  //   dispatch(logoutAction());
  //   history.push("/");
  // };

  const { currentUser } = useSelector((state: any) => state.common);
  console.log(profile.image);


  const isUser = currentUser &&
    profile.username === currentUser.username;

  return (
    <Styles.headerPrfContainer>
      <Styles.userImageContainer>
        <Styles.profileImage src={profile.image} alt="" />
      </Styles.userImageContainer>
      <Styles.headerPrfTitle>{profile.username}</Styles.headerPrfTitle>

      <FollowUserButton
        isUser={isUser}
        user={profile}
        follow={follow}
        unfollow={unfollow}
      />

      {/* Кнопка для logout пока не сверстана шапка. Удалить. */}
      {/* <button className="btn btn-outline-danger" onClick={logout}>
        Or click here to logout.
      </button> */}

    </Styles.headerPrfContainer>
    // <div className="user-info">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xs-12 col-md-10 offset-md-1">
    //         <img src={profile.image} className="user-img" alt={profile.username} />
    //         <h4>{profile.username}</h4>
    //         <p>{profile.bio}</p>
    //         <EditProfileSettings isUser={isUser} />
    //         <FollowUserButton
    //           isUser={isUser}
    //           user={profile}
    //           follow={follow}
    //           unfollow={unfollow}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ProfileHeader
