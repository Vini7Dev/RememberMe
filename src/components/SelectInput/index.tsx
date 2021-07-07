import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';

import {
  Container, Label, InputBorder, PickerContainer, PickerElement,
} from './styles';
import theme from '../../global/styles/theme';

// Picker item properties
export interface IPickerItemProps {
  label: string;
  value: string;
}

// SelectInput properties
interface ISelectInputProps extends PickerProps {
  label: string;
  selectedValue: string;
  onValueChange(value: unknown, index: number): void;
  wSize?: '100%' | '110px';
  items: IPickerItemProps[];
}

// Theme colors
const { baby_blue70, blue } = theme.colors;

// Component
const SelectInput: React.FC<ISelectInputProps> = ({
  label,
  wSize = '100%',
  items,
  ...rest
}) => {
  return (
    <Container wSize={wSize}>
      <Label>{label}</Label>

      <InputBorder
        colors={[baby_blue70, blue]}
      >
        <PickerContainer>
          <PickerElement {...rest}>
            {
              // Render picker items
              items.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))
            }
          </PickerElement>
        </PickerContainer>
      </InputBorder>
    </Container>
  );
};

export default SelectInput;
