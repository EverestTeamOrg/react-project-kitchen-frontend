import styled from 'styled-components';
import { textColor, device } from './constantsStyles';

export const headerPrfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

  max-width: 304px;

  margin: 0 auto 48px;
  
  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`

export const headerPrfTitle = styled.h2`
  font-family: 'AlegreyaSans', Times, serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.11;

  color: ${textColor.headers};

  margin-bottom: 24px;

  text-align: center;

  @media ${device.tablet} {
    font-size: 32px;
  }
`

export const userImageContainer = styled.div`
  border-radius: 50%;

  overflow: hidden;

  width: 230px;
  height: 230px;

  margin-bottom: 24px;
`
export const profileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
