import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { CommentWrapper, CommentText, CommentInfo } from '../StyledComponents/commentContainerStyle';
import ProfileInformationView from '../profile-information-view';
import { composeCreatedDate } from '../../utils/utils';
import Like from './like';
import {TFollowingUser} from "../../services/types";
import {TCommentProperties} from '../../services/types'

type TCommentProps = {
  comment: TCommentProperties;
  currentUser: TFollowingUser;
  slug: string;
}

const Comment: React.FC<TCommentProps> = (props) => {
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;

  return (
    <CommentWrapper>

      <CommentInfo>
        <ProfileInformationView articleDate={composeCreatedDate(comment.createdAt)} author={comment.author}/>

        <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
      </CommentInfo>

      <CommentText className="card-text">{comment.body}</CommentText>
    </CommentWrapper>
  );
};

export default Comment;
