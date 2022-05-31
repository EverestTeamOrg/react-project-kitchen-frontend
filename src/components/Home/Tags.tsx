import React, { useState } from "react";
import { useAppDispatch } from "../../services/hooks";
import {
  getAllArticlesByTagThunk,
  getAllArticles,
} from "../../services/thunks";
import {
  CancelButtonDiv,
  Tag,
  TagContainer,
  TagsContainer,
} from "../StyledComponents/tagsStyles";

type TTagsProps = {
  tags: string[] | null;
  onClickTag: (tag: string, pager: (page: number) => {}, payload: { [key: string]: string }) => {};
};

const Tags: React.FC<TTagsProps> = (props) => {
  const dispatch = useAppDispatch();

  const tags = props.tags;
  const [activeTag, setActiveTag] = useState("");

  const CancelButton: React.FC = () => {
    const deactivate = (
      ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      ev.preventDefault();
      dispatch(getAllArticles())
        .unwrap()
        .then(() => {
          setActiveTag("");
        });
    };

    return <CancelButtonDiv onClick={deactivate} />;
  };

  if (tags) {
    return (
      <TagsContainer>
        {tags.map((tag, index) => {
          const activate = (
            ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ) => {
            ev.preventDefault();
            dispatch(getAllArticlesByTagThunk({ tag: tag, page: 0 }))
              .unwrap()
              .then(() => {
                setActiveTag(tag);
              });
          };
          return (
            <TagContainer key={index}>
              <Tag isActive={activeTag === tag} onClick={activate}>
                {"#" + tag.replaceAll("#", "")}
              </Tag>
              {activeTag === tag && <CancelButton />}
            </TagContainer>
          );
        })}
      </TagsContainer>
    );
  } else {
    return <div>Loading Tags...</div>;
  }
};

export default Tags;
