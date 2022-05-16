import Comment from './Comment';
import React from 'react';
import { CommentListWrapper } from '../StyledComponents/commentContainerStyle';
import {TFollowingUser} from "../../services/types";

type TCommentListProps = {
  comments: any[];
  currentUser: TFollowingUser;
  slug: string;
}

const CommentList: React.FC<TCommentListProps> = (props) => {
  return (
    <CommentListWrapper>
      {
        props.comments.map(comment => {
          return (
            <Comment
              comment={comment}
              currentUser={props.currentUser}
              slug={props.slug}
              key={comment.id} />
          );
        })
      }
    </CommentListWrapper>
  );
};

export default CommentList;
