import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { colors,device } from './constantsStyles';

export const ArticleContent = styled.div`
  width: 100%;
  padding: 32px 0;
`;

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;
  max-height: 72px;
  margin-bottom: 16px;

  @media ${device.laptopL} {
    flex-direction: column;
`;

export const ArticleImg = styled.div<{ urlImg:string }>`
  background-image: url(../../../ggg.jpg)
  width: 158px;
  height: 85px;

  @media ${device.tablet} {
    width: 280px;
    height: 150px;
  }
`

export const ArticleText = styled.p<{fontSizeLap: string, lineHeightLap: string}>`
  font-family: 'Alegreya', Times, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.black};

  @media ${device.laptopL} {
    font-size: ${(props) => props.fontSizeLap};
    line-height: ${(props) => props.lineHeightLap};
}
`;

export const AdditionalInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
`;

export const ReadMoreLink = styled(Link)`
  margin-left: 0;
  color: ${colors.red};

  &:hover{
    color: ${colors.redHover};
    text-decoration: none
  };
`;

export const Tagslist = styled.ul`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding: 0px;
  gap: 4px 24px;
  margin-right: 0;
  flex-wrap: wrap;
  max-width: 318px;
  max-height: 52px;
`;

export const ArticleTag = styled.li`
  font-family: 'Alegreya Sans', Times, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  list-style-type: none;
  margin: 0;
  color: ${colors.darkGrey};
`