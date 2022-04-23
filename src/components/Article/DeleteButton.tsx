import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_COMMENT } from '../../constants/actionTypes';
import { deleteComment } from '../../api';

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (payload: any, commentId: any) =>
    dispatch({ type: DELETE_COMMENT, payload, commentId })
});

type TDeleteButtonProps = { 
  slug: string; 
  commentId: any; 
  onClick: (arg0: any, arg1: any) => void; 
  show: any; 
}

const DeleteButton: React.FC<TDeleteButtonProps> = (props) => {
  const del = () => {
    // const payload = agent.Comments.delete(props.slug, props.commentId);
    const payload = deleteComment(props.slug, props.commentId);
    props.onClick(payload, props.commentId);
  };

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span>
    );
  }
  return null;
};

export default connect(() => ({}), mapDispatchToProps)(DeleteButton);
