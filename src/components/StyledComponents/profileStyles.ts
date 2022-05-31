import styled from "styled-components";
import { device } from "./constantsStyles";

export const ProfileSection = styled.section`
  padding: 0 20px;

  max-width: 740px;

  margin: -250px auto 0;

  @media ${device.laptopL} {
    margin: -338px auto 0;
  }

  @media ${device.laptop} {
    margin: -358px auto 0;
  }
`;

export const ProfileText = styled.h3`
  font-family: "AlegreyaSans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  @media ${device.laptopL} {
  }

  @media ${device.laptop} {
  }
`;
