import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, Label, InputBorder, TextInput,
} from './styles';
import theme from '../../global/styles/theme';

// TextArea properties
interface ITextAreaProps extends TextInputProps {
  label?: string;
}

// Theme colors
const { baby_blue70, blue } = theme.colors;

// Component
const TextArea: React.FC<ITextAreaProps> = ({
  label,
  placeholder,
  ...rest
}) => {
  return (
    <Container>
      {
        label && <Label>{label}</Label>
      }
      <InputBorder
        colors={[baby_blue70, blue]}
      >
        <TextInput
          style={{ textAlignVertical: 'top' }}
          multiline
          numberOfLines={3}
          placeholder={placeholder}
          {...rest}
        />
      </InputBorder>
    </Container>
  );
};

export default TextArea;
