import styled from 'styled-components';


export const StyleBtn = styled.button`
  background-color: #008AFF;
  padding: 8px 16px;

  border: none;
  border-radius: 4px;

  color: #FFF;

  align-self: flex-end;

  transition: all 0.2s linear;

  &:hover{
    background-color: #007CE6;
  };

  &:active{
    background-color: #006ECC;
  }

  &:focus{
    outline: none;
  }

  &:disabled {
    background-color: #CCCCCC;
  }

`
