import styled from 'styled-components';
import { textColor, inputBorderColor, device } from './constantsStyles';

export const SettingsSection = styled.section`
  position: relative;
  max-width: 580px;
  margin: -250px auto 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    margin: -358px auto 0;
  }
`

export const SettingsTitle = styled.h2`
  text-align: center;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 36px;
  line-height: 1.11;

  color: ${textColor.headers};

  margin-bottom: 40px;

  @media ${device.laptop} {
    font-size: 32px;
    line-height: 36px;
  }
`
