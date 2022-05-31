import { colors, device } from "./constantsStyles";
import styled from "styled-components";
import blueCross from "../../images/blueCross.svg";

export const TagsContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  padding-bottom: 56px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
  margin: 0;
`;

type TTagProps = {
  isActive: boolean;
  onClick: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

export const Tag = styled.button<TTagProps>`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  display: flex;
  gap: 4px;
  font-family: "AlegreyaSans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.isActive ? colors.blue : colors.darkGrey)};
  &:hover {
    color: ${colors.blue};
    text-decoration: none;
  }
  &:focus {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }
`;

export const CancelButtonDiv = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  width: 24px;
  height: 24px;
  background: url(${blueCross});
`;
