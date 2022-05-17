import styled from "styled-components";
import { device } from '../constantsStyles';

export const ArcticleListContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0;

  @media ${device.laptopL} {
    max-width: 600px;
  }
  @media ${device.laptop} {
    width: 453px;
  }

  @media ${device.tablet} {
    width: 280px;
  }
`;
