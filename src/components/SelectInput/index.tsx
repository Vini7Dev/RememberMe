import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';

import {
  Container, Label, InputBorder, PickerContainer, PickerElement,
} from './styles';
import theme from '../../global/styles/theme';

interface ISelectInputProps extends PickerProps {
  label: string;
  selectedValue: string;
  onValueChange(): void;
  wSize?: '100%' | '110px';
}

const SelectInput: React.FC<ISelectInputProps> = ({
  label,
  wSize = '100%',
  ...rest
}) => {
  const { baby_blue70, blue } = theme.colors;

  return (
    <Container wSize={wSize}>
      <Label>{label}</Label>

      <InputBorder
        colors={[baby_blue70, blue]}
      >
        <PickerContainer>
          <PickerElement {...rest}>
            <Picker.Item label="01" value="1" />
            <Picker.Item label="02" value="2" />
            <Picker.Item label="03" value="3" />
          </PickerElement>
        </PickerContainer>
      </InputBorder>
    </Container>
  );
};

export default SelectInput;
