import {Link} from "react-router-dom";
import styled from "styled-components";
import newNoteIcon from "../../images/Navigation/homeicon.svg";
import logoutIcon from "../../images/Navigation/loginicon.svg";
import settingsIcon from "../../images/Navigation/settingsicon.svg";
import hoveredNewNoteIcon from "../../images/Navigation/hoveredhomeicon.svg";
import hoveredLogoutIcon from "../../images/Navigation/hoveredloginicon.svg";
import hoveredSettingsIcon from "../../images/Navigation/hoveredsettingsicon.svg";
import {device} from "./constantsStyles";

export const NavigationItemWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  width: 0px;
  z-index: 10;

  @media ${device.laptopL} {
    top: 35px;
  }

  @media ${device.tablet} {
    top: 33px;
  }
`;

export const NavigationItem = styled.li`
  position: relative;
  font-family: "AlegreyaSans";
  font-weight: 500;
  font-size: 18px;
  color: #008aff;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 40px;
  padding: 0 16px 0 18px;

  img {
    margin: 0 11px 0 0;
  }

  &:not(:first-child):hover {
    background-color: #008aff;
    color: #fff;

    &:nth-child(2) {
      div {
        background-image: url(${hoveredNewNoteIcon});
        background-color: #008aff;
      }
    }

    &:nth-child(3) {
      div {
        background-image: url(${hoveredSettingsIcon});
        background-color: #008aff;
      }
    }

    &:nth-child(4) {
      div {
        background-image: url(${hoveredLogoutIcon});
        background-color: #008aff;
      }
    }
  }
`;

export const UserNavigationList = styled.ul<{ isHovered: boolean }>`
  list-style-type: none;
  box-sizing: border-box;
  width: 172px;
  overflow: hidden;
  max-height: ${props => props.isHovered ? "163px" : "40px"};
  box-shadow: ${props => props.isHovered ?
    "0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.08)"
    : "none"};
  border-radius: ${props => props.isHovered ? "8px": "none"};
  transition: all linear 0.2s,
`

export const UserNavAvatar = styled.img`
  max-width: 100%;
  height: 27px;
`;

export const LeftFixedNavItem = styled(Link)`
  position: absolute;
  top: 0;
  right: 455px;
  text-decoration: none !important;

  @media ${device.laptopL} {
    right: 365px;
  }

  @media ${device.laptop} {
    right: 245px;
  }

  @media ${device.tablet} {
    right: 30px;
  }
`;

export const RightFixedNavItem = styled.div`
  position: absolute;
  top: 0;
  left: 455px;

  @media ${device.laptopL} {
    left: 320px;
  }

  @media ${device.laptop} {
    left: 210px;
  }

  @media ${device.tablet} {
    left: 0px;
  }

  @media ${device.mobileM} {
    left: -20px;
  }
`;

export const CustomNavigationLink = styled(Link)`
  text-decoration: none !important;
  position: absolute;
  display: block;
  height: 40px;
  width: 100%;
  background-color: transparent;
`;

export const NewNoteIcon = styled.div`
  background-image: url(${newNoteIcon});
  width: 24px;
  height: 24px;
  margin: 0 11px 0 0;
`;

export const SettingsIcon = styled.div`
  background-image: url(${settingsIcon});
  width: 24px;
  height: 24px;
  margin: 0 11px 0 0;
`;

export const LogoutIcon = styled.div`
  background-image: url(${logoutIcon});
  width: 24px;
  height: 24px;
  margin: 0 11px 0 0;
`;
