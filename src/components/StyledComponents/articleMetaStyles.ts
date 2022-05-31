import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {btnSbmtColor, textColor, linkColor, inputBorderColor, device} from './constantsStyles';

export const ArticleMetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 24px;

  @media ${device.tablet} {
    margin-bottom: 16px;
  }
`

export const ArticleNameAndDate = styled.div`
  display: flex;
  gap: 24px;

  margin: 0;

  @media ${device.tablet} {
    flex-direction: column;

    gap: 0;
  }
`

export const ArticleMetaName = styled(Link)`
  margin: 0;

  text-decoration: none;
  font-family: 'AlegreyaSans';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${textColor.secondaryText};

  &:hover {
    text-decoration: underline;
    color: ${textColor.secondaryText};
  }
  &:focus {
    text-decoration: underline;
    color: ${textColor.secondaryText};
  }
  &:active {
    text-decoration: underline;
    color: ${textColor.secondaryText};
  }
`

export const ArticleMetaDate = styled.span`
  font-family: 'AlegreyaSans';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  display: block;

  margin: 0;
  margin-right: 24px;

  color: ${textColor.secondaryText};
`
