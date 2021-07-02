import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, Label, InputBorder, TextInput,
} from './styles';
import theme from '../../global/styles/theme';

interface IInputProps extends TextInputProps {
  label?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  placeholder,
}) => {
  const { baby_blue70, blue } = theme.colors;

  return (
    <Container>
      {
        label && <Label>{label}</Label>
      }
      <InputBorder
        colors={[baby_blue70, blue]}
      >
        <TextInput placeholder={placeholder} />
      </InputBorder>
    </Container>
  );
};

export default Input;
