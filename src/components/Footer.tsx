import React from "react";
import {
  FooterText,
  FooterTextContainer,
  StyledFooter,
} from "./StyledComponents/FooterStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTextContainer>
        <FooterText>© Когда вырасту</FooterText>
        <FooterText>Сделано студентами Яндекс Практикума</FooterText>
      </FooterTextContainer>
    </StyledFooter>
  );
};

export default Footer;
