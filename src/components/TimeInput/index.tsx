import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Conteiner, InputBorder, TextInput,
} from './styles';
import theme from '../../global/styles/theme';

const TimeInput: React.FC<TextInputProps> = ({ ...rest }) => {
  const { baby_blue70, blue } = theme.colors;

  return (
    <Conteiner>
      <InputBorder colors={[baby_blue70, blue]}>
        <TextInput
          placeholder="__"
          keyboardType="numeric"
          maxLength={2}
          {...rest}
        />
      </InputBorder>
    </Conteiner>
  );
};

export default TimeInput;
