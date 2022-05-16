import React from "react";
import { useAppDispatch } from "../../services/hooks";
import { deleteCommentThunk, getCommentsForArticleThunk } from "../../services/thunks";
import DeleteArticleBtn from "../DeleteArticleBtn";

type TDeleteButtonProps = {
  slug: string;
  commentId: any;
  show: any;
};
const DeleteButton: React.FC<TDeleteButtonProps> = (props) => {
  const dispatch = useAppDispatch();

  const deleteComment = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(deleteCommentThunk({slug: props.slug, commentId: props.commentId}))
    .unwrap().then(() => {
      dispatch(getCommentsForArticleThunk(props.slug))
    })
  };

  if (props.show) {
    return (
      <DeleteArticleBtn onClick={deleteComment} height={'16px'}  mrgTop="0px" />
    );
  }
  return null;
};

export default DeleteButton;
