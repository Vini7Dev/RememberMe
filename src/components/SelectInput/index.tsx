import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';

import {
  Container, Label, InputBorder, PickerContainer, PickerElement,
} from './styles';
import theme from '../../global/styles/theme';

interface ISelectInputProps extends PickerProps {
  label?: string;
  selectedValue: string;
  onValueChange(): void;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  label,
  ...rest
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
        <PickerContainer>
          <PickerElement {...rest}>
            <Picker.Item label="Test1" value="1" />
            <Picker.Item label="Test2" value="2" />
            <Picker.Item label="Test3" value="3" />
          </PickerElement>
        </PickerContainer>
      </InputBorder>
    </Container>
  );
};

export default SelectInput;
