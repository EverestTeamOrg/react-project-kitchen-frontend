import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { textColor, linkColor, inputBorderColor, device } from './constantsStyles';

export const AuthSection = styled.section`
  max-width: 540px;
  margin: 0 auto;
  padding: 56px 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    padding-top: 64px;
  }
  @media ${device.mobileS} {
    padding-top: 72px;
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

  @media ${device.tablet} {
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
export const AuthLabel = styled.label`
  display: block;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};

  margin: 0;
`
export const AuthInput = styled.input<{isError: any}>`
  display: block;

  width: 100%;
  height: 40px;

  border: 1px solid ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.default}`};
  border-radius: 4px;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};

  padding: 0 16px;

  transition: all 0.2s linear;

  &:focus{
    outline: none;
    border-color: ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.active}`};
  }
`

export const AuthForm = styled.form`
  width: 100%;
`
export const AuthError = styled.p`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.error};

  margin: 0;
`
export const ErrorsContainer = styled.div`
  height: 24px;
`
export const AuthFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
`
