import styled from "styled-components";
import { colors, device} from '../constantsStyles'
import popup_close from '../../../images/popup_close.svg'

export const ModalContainer = styled.form`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px;
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  padding: 56px 30px 0;
  min-height: 320px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: opacity .3s linear;

  @media ${device.tablet} {
    width: 500px;
  }

  @media ${device.tablet} {
    width: 400px;
  }
  @media ${device.mobileL} {
    width: 280px;
  }
`

export const ModalHeading = styled.h2`
  margin: 0;
  margin-bottom: 32px;
  font-family: "AlegreyaSans", Times, serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 32px;
    line-height: 36px;
  }

`;

export const ModalSubHeading = styled.p`
  margin: 0;
  text-align: center;
  margin-bottom: 32px;
  font-family: "AlegreyaSans", Times, serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;

  }
`;

export const ModalButtonClose = styled.button`
  background-image: url(${popup_close});
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  &:hover {
   opacity: .7;
  }
`;

export const ModalButtonSubmit = styled.button`
  background-color: ${colors.red};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: #fff;
  transition: all 0.2s linear;
  font-size: 18px;
  line-height: 24px;

  &:hover {
    background-color: ${colors.redHover};
  }

  &:active {
    background-color:  ${colors.redActive}
    ;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #cccccc;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;

  display: flex;
  justify-content: center;
  align-items: center;
`;
