import React from "react";
import { Ball, BannerContainer, BlackChevron, BlackCircle, BlackCurve, BlueCurve, Subtitle, TextContainer, Title, TopFigure, YellowCirce } from "../StyledComponents/bannerStyles";
import styled from "styled-components";
import centerFigure from "../../images/Banner/centerFigure.svg";
import blueCurve from "../../images/Banner/blueCurve.svg";
import blackCurve from "../../images/Banner/blackCurve.svg";
import blackChevron from "../../images/Banner/blackChevron.svg";
import halfCircle from "../../images/Banner/halfCircle.svg";
import ball from "../../images/Banner/ball.svg";

interface TBannerProps {
  appName: any;
  token: any;
}

const Banner: React.FC<TBannerProps> = ({ token, appName }) => {
  return (
    <BannerContainer>
      <TextContainer>
        <Title>Когда вырасту</Title>
        <Subtitle>Каково быть джуном в турбулентном мире</Subtitle>
        <BlackCircle src={halfCircle} />
        <TopFigure src={centerFigure} />
        <BlueCurve src={blueCurve} />
        <BlackChevron src={blackChevron} />
        <YellowCirce location="left" />
        <YellowCirce location="right" />
        <BlackCurve src={blackCurve} />
        <Ball src={ball} />
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;
