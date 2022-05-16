import React, {FunctionComponent, useCallback, useState} from "react";
import {
  deleteArticleAsFavoriteThunk,
  setArticleAsFavoriteThunk, updateArticleThunk,
} from "../../services/thunks";

import {LikeIconContainer, LikeIconButton, LikeIconNumber} from "../StyledComponents/like-icon-styles";
import {useAppDispatch} from "../../services/hooks";
import {TArticleProperties} from "../../services/types";
import {articleSlice} from "../../services/articleSlice";

type TLIkeProperties = {
  article: TArticleProperties;
  icon: string;
  isButton?: boolean;
  onClick?: () => void;
}

const Like: FunctionComponent<TLIkeProperties> = (props) => {
  const dispatch = useAppDispatch();

  // const onLikeClick = useCallback(() => {
  //   if (props.article.favorited) {
  //     dispatch(deleteArticleAsFavoriteThunk(props.article.slug))
  //   } else {
  //     dispatch(setArticleAsFavoriteThunk(props.article.slug))
  //   }
  // }, [dispatch, deleteArticleAsFavoriteThunk, setArticleAsFavoriteThunk])

  return (
    <>
      {
        props.isButton
          ?
          <LikeIconButton onClick={() => {
            if (props.article.favorited) {
              dispatch(deleteArticleAsFavoriteThunk(props.article.slug))
            } else {
              dispatch(setArticleAsFavoriteThunk(props.article.slug));
            }
            if (props.onClick) {
              props.onClick();
            }
          }}>
            <LikeIconNumber>{props.article.favoritesCount}</LikeIconNumber>
            <img src={props.icon} alt="Иконка лайка"/>
          </LikeIconButton>
          :
          <LikeIconContainer>
            <LikeIconNumber>{props.article.favoritesCount}</LikeIconNumber>
            <img src={props.icon} alt="Иконка лайка"/>
          </LikeIconContainer>
      }
    </>
  )
}

export default Like;
