import React, {FunctionComponent} from "react";

import avatar from '../images/no-avatar-image.png';

import {
  HoverLink,
  ProfileContainer,
  ProfileImage, ProfileImageBorder,
  ProfileImageWrapper, ProfileText,
  ProfileTextWrapper
} from "./StyledComponents/profile-information-view-styles";

import {useAppSelector} from "../services/hooks";
import {TFollowingUser} from "../services/types";

// const ProfileInformationView: FunctionComponent<{avatar: string}> = (props) => {
const ProfileInformationView: FunctionComponent<{ articleDate: string, author: TFollowingUser }> = (props) => {

  return (
    <HoverLink to={`/@${props.author.username}`}>

      <ProfileContainer>

        <ProfileImageWrapper>
          <ProfileImageBorder
            avatar={props.author.image && props.author.image !== 'https://static.productionready.io/images/smiley-cyrus.jpg' ? true : false}>
            <ProfileImage
              src={props.author.image && props.author.image !== 'https://static.productionready.io/images/smiley-cyrus.jpg' ? props.author.image : avatar}
              alt="Аватар пользователя"/>
          </ProfileImageBorder>
        </ProfileImageWrapper>

        <ProfileTextWrapper>
          <ProfileText fontSize="16px" lineHeight="20px" underlined={true}>{props.author.username}</ProfileText>
          <ProfileText fontSize="12px" lineHeight="16px">{props.articleDate}</ProfileText>
        </ProfileTextWrapper>
      </ProfileContainer>

    </HoverLink>
  )
}

export default ProfileInformationView;
