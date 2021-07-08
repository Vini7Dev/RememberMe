import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, Label, InputBorder, TextInput,
} from './styles';
import theme from '../../global/styles/theme';

// Input properties
interface IInputProps extends TextInputProps {
  label?: string;
}

// Theme colors
const { baby_blue70, blue } = theme.colors;

// Component
const Input: React.FC<IInputProps> = ({
  label,
  defaultValue,
  placeholder,
  onChangeText,
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
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
        />
      </InputBorder>
    </Container>
  );
};

export default Input;
