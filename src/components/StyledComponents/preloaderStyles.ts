import styled, { keyframes } from 'styled-components';
import { device } from './constantsStyles';

const rotate = keyframes`
  0%   {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  top:0;
  left:0;
  height:100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

export const Preloader = styled.div`
  display: block;
  position: relative;
  width: 150px;
  height: 150px;
  left: calc(50% - 50px);
  top: 0;
  margin:calc(100vh / 3) 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #BCBCBC;
  background: transparent;
  animation: ${rotate} 2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #ABABAB;
    animation: ${rotate} 3s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #9B9B9B;
    animation: ${rotate} 1.5s linear infinite;
  }

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
  @media ${device.mobileS} {
    width: 50px;
    height: 50px;
  }
`
