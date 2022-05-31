import styled from 'styled-components';
import { textColor, device } from './constantsStyles';

export const ArticlePage = styled.section`
  max-width: 1140px;
  margin: 0 auto;

  @media ${device.laptopL} {
    max-width: 955px;
  }

  @media ${device.laptop} {
    max-width: 720px;
  }
  @media ${device.mobileS} {
    max-width: 280px;
  }
`

export const PageBody = styled.div`
  display: flex;
  gap: 81px;

  margin-top: calc(-307px + 56px);

  @media ${device.laptopL} {
    margin-top: calc(-371px + 48px);
  }

  @media ${device.laptop} {
    margin-top: calc(-403px + 48px);
    gap: 40px;
  }
  @media ${device.tablet} {
    flex-direction: column-reverse;

    max-width: 280px;
    margin-top: calc(-411px + 40px);
  }
`

export const PageContent = styled.div`
  width: 700px;

  @media ${device.laptopL} {
    width: 588px;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

export const ASide = styled.section`
  width: 359px;

  @media ${device.laptopL} {
    max-width: 377px;
  }

  @media ${device.laptop} {
    max-width: 277px;
  }
`

export const AsideStickyContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;

`

export const ArticleTitle = styled.h1`
  font-family: 'AlegreyaSans';
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;

  margin-bottom: 24px;

  color: ${textColor.headers};

  @media ${device.laptopL} {
    font-size: 40px;
    line-height: 48px;
  }

  @media ${device.laptop} {
    margin-bottom: 16px;
  }
`

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 48px;
`

export const ArticleText = styled.div<{marginBottom: string}>`
  font-family: 'Alegreya';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  margin: 0;
  margin-bottom: ${props => props.marginBottom};

  color: ${textColor.articles};

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 20px;
  }
`
export const ArticleTagsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 24px;

  margin: 0;

  list-style: none;
`

export const ArticleTag = styled.li`
  font-family: 'AlegreyaSans';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  margin: 0;

  color: ${textColor.secondaryText};
`
