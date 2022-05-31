import { device } from "./constantsStyles";
import styled from "styled-components";
import centerFigure from "../../images/Banner/centerFigure.svg";
import blueCurve from "../../images/Banner/blueCurve.svg";
import blackCurve from "../../images/Banner/blackCurve.svg";
import blackChevron from "../../images/Banner/blackChevron.svg";
import halfCircle from "../../images/Banner/halfCircle.svg";
import ball from "../../images/Banner/ball.svg";

export const BannerContainer = styled.div`
  overflow: hidden;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TextContainer = styled.div`
  position: relative;
  width: 1140px;
  margin-top: 118px; //убрать после добавления навигации
  display: grid;
  grid-template-columns: max-content 225px 1fr;
  gap: 30px;
  align-items: flex-end;
  color: #0a0a0b;
  border-bottom: 1px solid #0a0a0b;
  padding-bottom: 56px;

  @media ${device.desktop} {
    width: 1145px;
  }

  @media ${device.laptopL} {
    width: 955px;
    padding-bottom: 40px;
    margin-top: 86px; //убрать после добавления навигации
  }

  @media ${device.laptop} {
    width: 720px;
    padding-bottom: 24px;
    gap: 15px;
  }

  @media ${device.tablet} {
    width: 280px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 78px; //убрать после добавления навигации
    gap: 13px;
    padding-bottom: 17px;
  }
`;

export const Title = styled.h1`
  font-family: "AlegreyaSans";
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 118px;
  line-height: 100%;

  @media ${device.laptopL} {
    font-size: 102px;
  }

  @media ${device.laptop} {
    font-size: 86px;
  }

  @media ${device.tablet} {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-family: "AlegreyaSans";
  margin: 0;
  margin-bottom: 23px;
  max-width: 225px;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 100%;

  @media ${device.laptopL} {
    font-size: 18px;
    margin-bottom: 25px;
  }

  @media ${device.laptop} {
    font-size: 18px;
    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    margin-bottom: 0;
    font-size: 16px;
  }
`;
/*
export const Parallelogram = styled.div`
  width: 91px;
  height: 328px;
  transform: rotate(42.73deg) skew(-18.5deg);
  background: #ff413b;
`;*/

export const TopFigure = styled.img`
  background-color: transparent;
  width: 370px;
  height: 377px;
  position: absolute;
  bottom: 1px;
  left: 505px;

  @media ${device.desktop} {
    width: 317px;
    height: 322px;
    bottom: 45px;
    left: 360px;
  }

  @media ${device.laptopXL} {
    width: 264px;
    height: 267px;
    bottom: 85px;
    left: 360px;
  }

  @media ${device.laptopL} {
    width: 197px;
    height: 200px;
    bottom: 77px;
    left: 323px;
  }

  @media ${device.laptop} {
    width: 148px;
    height: 150px;
    bottom: 80px;
    left: 240px;
  }

  @media ${device.tablet} {
    width: 112px;
    height: 113px;
    bottom: 102px;
    left: 91px;
  }
`;

export const BlueCurve = styled.img`
  background-color: transparent;
  width: 321px;
  height: 642px;
  position: absolute;
  bottom: -261px;
  left: -389px;

  @media ${device.desktop} {
    bottom: -180px;
    left: -374px;
    height: 547px;
    width: 274px;
  }

  @media ${device.laptopXL} {
    bottom: -100px;
    left: -267px;
    height: 455px;
    width: 228px;
  }

  @media ${device.laptopL} {
    display: none;
  }
`;

export const BlackChevron = styled.img`
  background-color: transparent;
  position: absolute;
  width: 252px;
  height: 263px;
  bottom: 77px;
  left: -379px;
  animation: 15s linear 1s infinite alternate fly;

  @media ${device.desktop} {
    display: none;
  }

  @keyframes fly {
    from {
      bottom: 77px;
    }

    to {
      bottom: 177px;
    }
  }
`;

export const BlackCircle = styled.img`
  background-color: transparent;
  position: absolute;
  width: 175px;
  height: 75px;
  bottom: -1px;
  right: 21px;

  @media ${device.desktop} {
    bottom: -2px;
    right: -2px;
    height: 64px;
    width: 149px;
  }

  @media ${device.laptopXL} {
    bottom: -2px;
    right: -2px;
    height: 53px;
    width: 124px;
  }

  @media ${device.laptopL} {
    display: none;
  }
`;

export const BlackCurve = styled.img`
  background-color: transparent;
  position: absolute;
  width: 351px;
  height: 818px;
  bottom: -304px;
  right: -340px;

  @media ${device.desktop} {
    width: 300px;
    height: 697px;
    bottom: -304px;
    right: -315px;
  }

  @media ${device.laptopXL} {
    display: none;
  }
`;

export const Ball = styled.img`
  background-color: transparent;
  position: absolute;
  width: 428px;
  height: 123px;
  bottom: -29px;
  right: -390px;
  transform: rotate(10deg);
  animation: 6s ease-out 1s infinite alternate orbit;

  @media ${device.desktop} {
    width: 363px;
    height: 111px;
    bottom: -19px;
    right: -358px;
    transform: rotate(10deg);
    animation: 6s ease-out 1s infinite alternate orbitDesktop;
  }

  @media ${device.laptopXL} {
    width: 363px;
    height: 111px;
    bottom: -19px;
    right: -358px;
    transform: rotate(10deg);
    animation: 6s ease-out 1s infinite alternate orbitLaptopXL;
  }

  @media ${device.laptopL} {
    display: none;
  }

  @keyframes orbit {
    from {
      width: 428px;
      height: 123px;
      bottom: -29px;
      right: -390px;
      transform: rotate(10deg);
    }
    to {
      width: 428px;
      height: 135px;
      bottom: 56px;
      right: -380px;
      transform: rotate(-10deg);
    }
  }

  @keyframes orbitDesktop {
    from {
      width: 363px;
      height: 111px;
      bottom: -19px;
      right: -358px;
      transform: rotate(10deg);
    }
    to {
      width: 363px;
      height: 111px;
      bottom: 59px;
      right: -332px;
      transform: rotate(-10deg);
    }
  }

  @keyframes orbitLaptopXL {
    from {
      width: 363px;
      height: 111px;
      bottom: -19px;
      right: -358px;
      transform: rotate(10deg);
    }
    to {
      width: 366px;
      height: 111px;
      bottom: 55px;
      right: -332px;
      transform: rotate(-10deg);
    }
  }
`;

interface TYellowCircle {
  location: "left" | "right";
}
export const YellowCirce = styled.div<TYellowCircle>`
  position: absolute;
  border-radius: 50%;
  background-color: #ffc600;
  width: 20px;
  height: 20px;
  animation: ${(props) =>
    props.location === "right"
      ? "9s ease-in-out infinite alternate slideRightCircle"
      : "9s ease-in-out infinite alternate slideLeftCircle"};
  bottom: ${(props) => (props.location === "left" ? "74px" : "169px")};
  left: ${(props) => (props.location === "left" ? "-41px" : "1000px")};

  @media ${device.desktop} {
    bottom: ${(props) => (props.location === "left" ? "74px" : "169px")};
    left: ${(props) => (props.location === "left" ? "-31px" : "1223px")};
    animation: ${(props) =>
      props.location === "right"
        ? "9s ease-in-out infinite alternate slideRightCircleDesktop"
        : "9s ease-in-out infinite alternate slideLeftCircleDesktop"};
  }

  @media ${device.laptopXL} {
    display: ${(props) => (props.location === "right" ? "none" : "block")};
    bottom: ${(props) => (props.location === "left" ? "57px" : "125px")};
    left: ${(props) => (props.location === "left" ? "-23px" : "1223px")};
  }

  @media ${device.laptopL} {
    display: none;
  }

  @keyframes slideRightCircle {
    from {
      left: 1000px;
    }

    to {
      left: -41px;
    }
  }

  @keyframes slideLeftCircle {
    from {
      bottom: 74px;
    }

    to {
      bottom: 169px;
    }
  }

  @keyframes slideRightCircleDesktop {
    from {
      left: 1000px;
    }

    to {
      left: -31px;
    }
  }

  @keyframes slideLeftCircleDesktop {
    from {
      bottom: 74px;
    }

    to {
      bottom: 169px;
    }
  }
`;
