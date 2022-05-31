import styled from 'styled-components';

export const LikeIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`

export const LikeIconButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  margin: 0;

  & img {
    opacity: 100%;
    transition: opacity 0.2s linear;
  }

  &:hover img {
    opacity: 50%;
  }
  &:focus {
    border: none;
    opacity: 100%;
  }
  &:active {
    border: none;
    opacity: 100%;
  }
`

export const LikeIconNumber = styled.p`
  margin: 0 10px 0 0;
  font-family: 'AlegreyaSans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #62626A;
`
