import styled from "styled-components";
import {Link} from "react-router-dom";
import {device} from "./constantsStyles";
import {Carousel} from "react-responsive-carousel";

export const SidebarRight = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 360px;

  @media ${device.laptop} {
    width: 227px;
  }

  @media ${device.tablet}
  {
    width: 280px;
  }

  @media ${device.tablet}
  {
    padding: 0 0 40px;
    border-bottom: #ccc 1px solid;
    margin: 0 auto;
    // padding-left: 46px;
  }
`

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
`

export const SidebarHeading = styled.h2`
  margin: 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 32px;
  }
`
export const SidebarVisibleBlock = styled.div`
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`

export const AuthorWrapper = styled.div<{margin: string}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({margin}) => margin};
`

export const ArticleWrapper = styled.div<{padding: string}>`
  width: 100%;
  box-sizing: border-box;
  padding: 24px 24px 24px 0;
  border-bottom: #CCCCCC solid 1px;
  &:last-of-type {
    border-bottom: none;
  }

  @media ${device.tablet} {
    text-align: left;
    border-bottom: none;
  }

`
interface IArticleHeading {
  fontSize: string,
  lineHeight: string,
  margin: string,
  fontSizeLap: string,
  lineHeightLap: string
}

export const ArticleHeading = styled.h3<IArticleHeading>`
  margin: ${({margin}) => margin};
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};

  @media ${device.laptopL} {
    font-size: ${(props) => props.fontSizeLap};
    line-height: ${(props) => props.lineHeightLap};
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 22px;

    margin-bottom: 16px;
  }
`

export const ArticleLink = styled(Link)`
  color: #0A0A0B;

  &:hover {
    text-decoration: none;
    color: #008AFF;
  }
  &:focus {
    text-decoration: none;
    color: #008AFF;
  }
  &:active {
    text-decoration: none;
    color: #008AFF;
  }
`
export const SliderContainerCarousel = styled(Carousel)`
  display: none;

  & .control-dots {
    margin: 0;
  }

  & .control-dots > .dot {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin: 0 12px 0 0;
    background: #ccc;
    border-radius: 50%;
    box-shadow: none;
    &:last-of-type {
      margin-right: 0;
    }
  }

  & .control-dots > .selected {
    background: #008AFF;
  }

  @media ${device.tablet} {
    display: block;
  }
`
