import styled from 'styled-components';
import { textColor, inputBorderColor, device } from './constantsStyles';
import TextareaAutosize from 'react-textarea-autosize';

export const EditorSection = styled.section`
  max-width: 580px;
  margin: -250px auto 0;
  padding: 0 20px 110px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    margin: -338px auto 0;
  }

  @media ${device.laptop} {
    margin: -358px auto 0;
    padding-bottom: 25px;
  }

  @media ${device.tablet} {
    padding-bottom: 30px;
  }
`
export const EditorTitle = styled.h2`
  text-align: center;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 36px;
  line-height: 1.11;

  color: ${textColor.headers};

  margin-bottom: 40px;

  @media ${device.laptop} {
    font-size: 32px;
  }
`
export const EditorTextarea = styled(TextareaAutosize)`
  display: block;

  width: 99.6%;

  overflow:hidden;

  border: none;

  font-family: 'AlegreyaSans', Times, serif;
  font-weight:400;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor.secondaryText};

  padding: 0 16px;
  margin: 0 auto;

  transition: all 0.2s linear;

  &:focus{
    outline: none;
}
`

export const TextAreaContainer = styled.div<{isError: any}>`
  border: 1px solid ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.default}`};
  border-radius: 4px;

  transition: all .2s linear;

  &:focus-within{
    border-color: ${props => props.isError ? `${inputBorderColor.error}` : `${inputBorderColor.active}`};
}
`
