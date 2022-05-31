
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device, textColor, inputBorderColor } from './constantsStyles';

export const CommentContainerWrapper = styled.div`
  width: 100%;
  margin: 0;
`;

export const CommentContainerTitle = styled.h2`
  font-family: 'AlegreyaSans';
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;

  margin-bottom: 24px;

  color: #000000;

  @media ${device.tablet} {

  }
`;

export const CommentForm = styled.form`
  border: 1px solid ${inputBorderColor.default};
  border-radius: 4px;
`;

export const CommentTextAriaWrapper = styled.div`
  width: 100%;
  padding: 16px 24px;

  border-bottom: 1px solid ${inputBorderColor.default};
  background-color: transparent;

  @media ${device.laptop} {
    padding: 16px;
  }
`;

export const CommentTextAria = styled.textarea`
  font-family: 'Alegreya';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  display: block;
  width: 100%;

  color: ${textColor.articles};

  resize: none;
  outline: none;
  border: none;

  @media ${device.laptop} {
    font-size: 16px;
    line-height: 20px;
  }

  &:focus {
        outline: none;
    }
`;

export const CommentFooterWrapper = styled.div<{column: string, gap: string, align: string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 24px;
  margin: 0;

  background-color: transparent;

  @media ${device.laptop} {
    flex-direction: ${props => props.column};
    row-gap: ${props => props.gap};
    align-items: ${props => props.align};

    padding: 16px;
  }
`;

export const CommentIsntLogin = styled.p`
  font-family: 'AlegreyaSans';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  color: #000000;
`;

export const CommentLink = styled(Link)`
  font-family: 'AlegreyaSans';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  color: ${textColor.blueText};
`;

export const CommentListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  width: 100%;
  margin: 0;

  list-style: none;
`;

export const CommentWrapper = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  padding: 24px 24px 16px;
  margin: 0;

  border: 1px solid ${inputBorderColor.default};
  border-radius: 4px;

  @media ${device.laptop} {
    row-gap: 16px;

    padding: 16px;
  }

  &:first-child {
    margin-top: 24px;
  }
`;

export const CommentText = styled.p`
  font-family: 'Alegreya';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  display: block;

  color: ${textColor.articles};

  @media ${device.laptop} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;
`;
