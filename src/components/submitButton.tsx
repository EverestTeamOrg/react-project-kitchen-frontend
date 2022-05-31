import { FC } from "react";
import {StyleBtn} from "./StyledComponents/SignupLoginSubmitBtnStyles";

interface ISubmitButtonProps {
  btnText: string;
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
}

const SubmitButton: FC<ISubmitButtonProps> = ({
  btnText,
  type = "submit",
  disabled,
}) => {
  return (
    <StyleBtn
      disabled={disabled}
      type={type}
    >
      {btnText}
    </StyleBtn>
  );
};

export default SubmitButton;
