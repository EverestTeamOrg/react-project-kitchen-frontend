import styled from 'styled-components';
import { textColor, btnSbmtColor } from './constantsStyles';

export const followBtn = styled.button`
  border: none;
  border-radius: 4px;

  font-family: 'AlegreyaSans', Times, serif;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  color: ${textColor.whiteText};

  background-color: ${btnSbmtColor.default};

  padding: 8px 16px;

  transition: all 0.2s linear;

  &:hover{
    background-color: ${btnSbmtColor.hover};
  }
`
export const followImg = styled.img`
  margin-right: 13px;
  background: transparent;
`
