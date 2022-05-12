import styled from "styled-components";
import {TFontStyle} from "./types";

export const ArticleDescription = styled.p<TFontStyle>`
  font-family: 'Alegreya', serif;
  font-weight: 400;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  color: #0A0A0B;
`
