import Comment from './Comment';
import React from 'react';
import { CommentListWrapper } from '../StyledComponents/commentContainerStyle';

type TCommentListProps = {
  comments: any[];
  currentUser: {
    username: string;
    image: string;
    email: string;
    bio?: string;
  };
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
