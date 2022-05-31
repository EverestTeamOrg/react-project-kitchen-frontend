import React from 'react'
import {ReactComponent as EyeSlash} from '../../images/eye-of.svg'
import {ReactComponent as Eye} from '../../images/eye-on.svg'
import {IconPassword} from '../../components/StyledComponents/icon-pass-styles'

type TIConInputProps = {
 visible: boolean,
 toggle: () => void;
}

const IconInput: React.FC<TIConInputProps> = ({visible, toggle}) => {

  return (
    <IconPassword onClick={toggle}>
        {!visible ? <EyeSlash/> : <Eye/>}
    </IconPassword>
  );
};

export default IconInput;
