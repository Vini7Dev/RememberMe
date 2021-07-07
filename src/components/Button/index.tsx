import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
  Container, ButtonElement, ButtonText,
} from './styles';
import theme from '../../global/styles/theme';

// Button properties
interface IButtonProps extends RectButtonProps {
  name: string;
  wSize: '100%' | '80%' | '50%';
  color: 'blue' | 'lightBlue';
  icon?: 'plus' | 'edit-3';
}

// Theme colors
const { baby_blue100, baby_blue80, cyan90 } = theme.colors;

// Component
const Button: React.FC<IButtonProps> = ({
  name,
  wSize,
  color,
  icon,
  ...rest
}) => {
  return (
    <Container
      colors={
        (function () {
          switch (color) {
            case 'blue':
              return [baby_blue80, cyan90];
            case 'lightBlue':
              return [baby_blue100, cyan90];
            default:
              return [baby_blue80, cyan90];
          }
        }())
      }
      start={[0, 0]}
      end={[1, 1]}
      wSize={wSize}
    >
      <ButtonElement {...rest}>
        {
          icon && (
          <Feather
            name={icon}
            size={24}
            color="#FFFFFF"
            style={{ marginRight: 5 }}
          />
          )
        }
        <ButtonText>{name}</ButtonText>
      </ButtonElement>
    </Container>
  );
};

export default Button;
