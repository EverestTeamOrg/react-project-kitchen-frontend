import React, { useState } from "react";

import { createCommentThunk } from "../../services/thunks";
import { composeCreatedDate } from "../../utils/utils";
import ProfileInformationView from "../profile-information-view";
import { CommentForm, CommentTextAria, CommentTextAriaWrapper, CommentFooterWrapper } from "../StyledComponents/commentContainerStyle";
import * as Styled from "../StyledComponents/followUserButtonStyles";
import {TUser} from "../../services/types";
import {useAppDispatch} from "../../services/hooks";

type TCommentInputProps = {
  currentUser: TUser;
  slug: any;
};

const CommentInput: React.FC<TCommentInputProps> = (props) => {
  const dispatch = useAppDispatch();

  const [body, setBody] = useState<string>("");

  const currentBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const createComment = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(createCommentThunk({slug: props.slug, comment: {body: body} }))
    setBody("");
  };

  const todayDate = new Date(Date.now()).toISOString().split('T')[0];

  return (
    <CommentForm onSubmit={createComment}>

      <CommentTextAriaWrapper>
        <CommentTextAria
            placeholder="Напишите комментарий..."
            value={body}
            onChange={currentBody}
            rows={3}
          ></CommentTextAria>
      </CommentTextAriaWrapper>

      <CommentFooterWrapper align="flex-start" gap="10px" column="column" >
        <ProfileInformationView articleDate={composeCreatedDate(todayDate)} author={props.currentUser}/>

        <Styled.followBtn type="submit">
          Отправить комментарий
        </Styled.followBtn>
      </CommentFooterWrapper>
    </CommentForm>
  );
};

export default CommentInput;
