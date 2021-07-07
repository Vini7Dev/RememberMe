import React, { useCallback } from 'react';
import { TextInputProps } from 'react-native';

import {
  Conteiner, InputBorder, TextInput,
} from './styles';
import theme from '../../global/styles/theme';

import FormValidation from '../../utils/FormValidation';

// TimeInput properties
interface ITimeInputProps extends TextInputProps {
  type: 'hour' | 'minute';
  value: string;
  onChangeText(text: string): void;
}

// Theme colors
const { baby_blue70, blue } = theme.colors;

// Component
const TimeInput: React.FC<ITimeInputProps> = ({ type, onChangeText, ...rest }) => {
  // Format text on change
  const handleFormatTime = useCallback((text: string) => {
    // Validate input value
    const validationResponse = FormValidation.timeInputValidation(type, text);

    // If validation is equal a "success", update state value
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
