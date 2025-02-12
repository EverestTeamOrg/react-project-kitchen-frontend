import { followUserThunk, unfollowUserThunk } from "../services/thunks";
import * as Styles from "./StyledComponents/followUserButtonStyles";
import minus from "../images/whiteMinus.svg";
import plus from "../images/whitePlus.svg";
import { useAppDispatch } from "../services/hooks";
import {TUserProfileProperties} from "../services/types";

type TFollowUserButton = {
  follow?: boolean;
  isUser: boolean;
  unfollow?: boolean;
  user: TUserProfileProperties
}

function FollowUserButton({ user }: TFollowUserButton) {

  const dispatch = useAppDispatch()

  const handleClick = (ev: React.SyntheticEvent<Element, Event>) => {
    ev.preventDefault();
    user.following
    ? dispatch(unfollowUserThunk(user.username))
    : dispatch(followUserThunk(user.username))
  };

  return (
    <Styles.followBtn onClick={handleClick}>
      <Styles.followImg src={user.following ? minus : plus}/>
      {user.following ? 'Отписаться' : 'Подписаться'}
    </Styles.followBtn>
  );
};

export default FollowUserButton
