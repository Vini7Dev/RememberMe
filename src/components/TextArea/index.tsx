import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, Label, InputBorder, TextInput,
} from './styles';
import theme from '../../global/styles/theme';

interface ITextAreaProps extends TextInputProps {
  label?: string;
}

const TextArea: React.FC<ITextAreaProps> = ({
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
        <TextInput
          multiline
          numberOfLines={3}
          placeholder={placeholder}
          style={{ textAlignVertical: 'top' }}
        />
      </InputBorder>
    </Container>
  );
};

export default TextArea;
