import React, { useCallback } from 'react';
import { TextInputProps } from 'react-native';

import {
  Conteiner, InputBorder, TextInput,
} from './styles';
import theme from '../../global/styles/theme';

import FormValidation from '../../utils/FormValidation';

interface ITimeInputProps extends TextInputProps {
  type: 'hour' | 'minute';
  value: string;
  onChangeText(text: string): void;
}

const TimeInput: React.FC<ITimeInputProps> = ({ type, onChangeText, ...rest }) => {
  const { baby_blue70, blue } = theme.colors;

  const handleFormatTime = useCallback((text: string) => {
    const validationResponse = FormValidation.timeInputValidation(type, text);

    console.log(validationResponse);

    if (validationResponse.type === 'success') { onChangeText(text); }
  }, [type, onChangeText]);

  return (
    <Conteiner>
      <InputBorder colors={[baby_blue70, blue]}>
        <TextInput
          placeholder="__"
          keyboardType="numeric"
          maxLength={2}
          onChangeText={handleFormatTime}
          {...rest}
        />
      </InputBorder>
    </Conteiner>
  );
};

export default TimeInput;
