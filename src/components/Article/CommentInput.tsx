import React, { useState } from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";
import { createComment as _createCommentApi } from '../../api';

type TCommentInputProps = { 
  currentUser: { 
    username: any, 
    image: string,
  }; 
  slug: any; 
  onSubmit: (payload: any) => void;
}


const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (payload: any) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput: React.FC<TCommentInputProps> = (props) => {
  const [body, setBody] = useState<string>("");

  const currentBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const createComment = (e:React.SyntheticEvent) => {
    e.preventDefault();
    // const payload = agent.Comments.create(props.slug, { body: body });
    const payload = _createCommentApi(props.slug, { body: body });
    setBody("");
    props.onSubmit(payload);
  };

  return (
    <form className="card comment-form" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={currentBody}
          // rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        F
        <img
          src={props.currentUser.image}
          className="comment-author-img"
          alt={props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
