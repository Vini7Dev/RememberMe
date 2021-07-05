import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';

import {
  Container, Label, InputBorder, PickerContainer, PickerElement,
} from './styles';
import theme from '../../global/styles/theme';

export interface IPickerItemProps {
  label: string;
  value: string;
}

interface ISelectInputProps extends PickerProps {
  label: string;
  selectedValue: string;
  onValueChange(): void;
  wSize?: '100%' | '110px';
  items: IPickerItemProps[];
}

const SelectInput: React.FC<ISelectInputProps> = ({
  label,
  wSize = '100%',
  items,
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
            {
              items.map((item) => (
                <Picker.Item label={item.label} value={item.value} />
              ))
            }
          </PickerElement>
        </PickerContainer>
      </InputBorder>
    </Container>
  );
};

export default SelectInput;
