import CommentInput from './CommentInput';
import CommentList from './CommentList';
import React from 'react';
import ListErrors from '../ListErrors';
import { CommentContainerTitle, CommentContainerWrapper, CommentIsntLogin, CommentLink } from '../StyledComponents/commentContainerStyle';
import {TFollowingUser} from "../../services/types";
import {TCommentProperties} from '../../services/types'

type TCommentContainerProps = {
  currentUser: TFollowingUser;
  errors: any;
  slug: string;
  comments: Array<TCommentProperties>;
}

const CommentContainer: React.FC<TCommentContainerProps>  = (props) => {

  if (props.currentUser.email) {
    return (
      <CommentContainerWrapper>
        <CommentContainerTitle>
          Комментарии:
        </CommentContainerTitle>

        <div>
          <ListErrors errors={props.errors} />
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </CommentContainerWrapper>
    );
  } else {
    return (
      <CommentContainerWrapper>
        <CommentContainerTitle>
          Комментарии:
        </CommentContainerTitle>

        <CommentIsntLogin>
          <CommentLink to="/login">Зайдите</CommentLink>
          &nbsp;или&nbsp;
          <CommentLink to="/register">зарегистрируйтесь</CommentLink>
          &nbsp;чтобы оставить комментарий.
        </CommentIsntLogin>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </CommentContainerWrapper>
    );
  }
};

export default CommentContainer;
