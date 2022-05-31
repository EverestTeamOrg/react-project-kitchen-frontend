import React, { useState } from 'react'
import {ReactComponent as Clip} from '../../images/clip.svg'
import { IconFileLabel, IconFileInput } from '../../components/StyledComponents/icon-file-styles'

// type TIconInputFile = {
//  visible: boolean,
//  onClick: () => void;
// }

const IconInputFile: React.FC = () => {

  return (
    <IconFileLabel>
      <IconFileInput
          type="text"
          name="file"
          accept=".jpg, .jpeg, .png, .gif"
          />
      <Clip/>
    </IconFileLabel>
  );
};

export default IconInputFile;
