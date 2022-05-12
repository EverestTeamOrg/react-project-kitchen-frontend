import styled from "styled-components";
import {TFontStyle} from "./types";

export const TooltipContainer = styled.div`
  //display: block;
  margin: 0;
  padding: 16px;
  width: 280px;
  border-radius: 4px;
  border: #ccc solid 1px;
`
export const TooltipAuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 16px;
`

export const TooltipButton = styled.button`
  all: unset;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 50%;
  }
`
export const TooltipIcon = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
  object-position: center center;
`
