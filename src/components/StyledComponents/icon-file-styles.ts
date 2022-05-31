import styled from 'styled-components';

export const IconFileInput = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: 1;
  
`
export const IconFileLabel = styled.label`
  display: inline-block;
  width:24px;
  height:24px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  z-index: 7;
  &:hover{
    opacity: .7;
    transition: all 0.4s linear;
`
