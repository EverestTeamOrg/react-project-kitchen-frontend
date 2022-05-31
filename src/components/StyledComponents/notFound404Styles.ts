import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, device, textColor } from './constantsStyles';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  max-width: 350px;
  margin: -216px auto 0;

  @media ${device.laptopL} {
    margin-top: -330px;
  };
  @media ${device.tabletVert} {
    max-width: 213px;
  };

  @media ${device.tablet} {
    margin-top: -370px
  };
`;

export const NotFoundTitle = styled.h1`
  font-family: 'AlegreyaSans', Times, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 118px;
  line-height: 100%;
  margin: 0 0 24px;
  color: ${colors.red};

  @media ${device.tablet} {
    font-size: 86px;
  };
`;

export const NotFoundText = styled.p`
font-family: 'AlegreyaSans', Times, serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
margin: 0;
text-align: center;
color: ${colors.black}

@media ${device.tablet} {
  font-size: 16px;
};
`;

export const NavLink = styled(Link)`
  color: ${textColor.blueText};
  text-decoration: none;
  &:hover {
    color: ${colors.blueHover};
    text-decoration: none;
  }
`;
