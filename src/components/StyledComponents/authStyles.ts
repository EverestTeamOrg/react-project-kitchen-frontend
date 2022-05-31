import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { textColor, linkColor, device } from './constantsStyles';

export const RegisterSection = styled.section`
max-width: 580px;
  margin: -250px auto 0;
  padding: 0 20px 112px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    margin: -358px auto 0;
    padding-bottom: 155px;
  }

  @media ${device.laptopL} {
    margin: -338px auto 0;
  }

`
export const LoginSection = styled(RegisterSection)`
  padding: 0 20px 165px;

  @media ${device.laptop} {
    padding-bottom: 275px;
  }
`

export const AuthTitle = styled.h2`
  text-align: center;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 36px;
  line-height: 1.11;

  color: ${textColor.headers};

  margin-bottom: 40px;

  @media ${device.laptop} {
    font-size: 32px;
  }
`
export const StyledLink = styled(Link)`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: ${linkColor.blue};
  text-align: center;

  margin-bottom: 24px;

  transition: all 0.2s linear;

  &:hover {
    text-decoration: none;
    color: ${linkColor.blueHover};
  }
`
