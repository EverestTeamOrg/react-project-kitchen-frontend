import styled from 'styled-components';
import binDefault from '../../images/binDefault.svg';
import binHover from '../../images/binHover.svg';
import binFocus from '../../images/binFocus.svg';
import { btnTextDeleteColor } from './constantsStyles';

export const button = styled.button<{mrgTop: string, height: string | undefined, align: string | undefined}>`
  border: none;

  height: ${props => props.height};

  background: url(${binDefault}) no-repeat left;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;

  color: ${btnTextDeleteColor.default};

  align-self: ${props => props.align || "auto"};

  margin-top: ${props => props.mrgTop};

  padding: ${props => props.height ? "16px" : "8px"} ${props => props.height ? "0px" : "16px"} 8px ${props => props.height ? "24px" : "32px"};

  transition: all 0.2s linear;

  &:hover{
    background: url(${binHover})  no-repeat left;
    color: ${btnTextDeleteColor.hover};
  };

  &:active{
    color: ${btnTextDeleteColor.active};
    background: url(${binFocus})  no-repeat left;
  }

  &:focus{
    outline: none;
  }
`
