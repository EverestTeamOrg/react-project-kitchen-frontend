import styled from "styled-components";
import { device } from "./constantsStyles";

export const StyledFooter = styled.footer`
  height: 121px;
  border-top: 1px solid #ccc;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptopL} {
    height: 88px;
    padding: 0 24px;
  }

  @media ${device.mobileL} {
    padding: 0 20px;
  }
`;

export const FooterTextContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterText = styled.p`
  margin: 0;
  font-family: "AlegreyaSans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #62626a;

  @media ${device.tabletVert} {
    line-height: 125%;
    width: 40%;
    text-align: center;

    &:last-child {
      width: 60%;
    }
  }
`;
