import React, { useState, useEffect } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
  Container, ButtonElement,
} from './styles';
import theme from '../../global/styles/theme';

// CircleButton properties
interface ICircleButton extends RectButtonProps {
  icon?: 'check' | 'trash-2' | 'filter';
  color?: 'confirm' | 'danger' | 'transparent_blue';
}

// Theme colors
const {
  baby_blue100,
  baby_blue90,
  blue,
  cyan100,
  danger100,
  danger90,
} = theme.colors;

// Component
const CircleButton: React.FC<ICircleButton> = ({
  icon = 'check',
  color = 'confirm',
  ...rest
}) => {
  // Component colors
  const [iconColor, setIconColor] = useState(baby_blue90);
  const [borderColor, setBorderColor] = useState(cyan100);
  const [gradientColor, setGradientColor] = useState<string[]>([baby_blue90, cyan100]);

  // Set component colors by "color" parameter
  useEffect(() => {
    switch (color) {
      case 'confirm':
        setIconColor(baby_blue90);
        setBorderColor(cyan100);
        setGradientColor([baby_blue90, cyan100]);
        break;
      case 'danger':
        setIconColor(danger90);
        setBorderColor(danger90);
        setGradientColor([danger100, danger90]);
        break;
      case 'transparent_blue':
        setIconColor(baby_blue90);
        setBorderColor(baby_blue90);
        setGradientColor([baby_blue100, blue]);
        break;
      default:
        setIconColor(baby_blue90);
        setBorderColor(cyan100);
        setGradientColor([baby_blue90, cyan100]);
        break;
    }
  }, [color]);

  return (
    <Container
      colors={gradientColor}
      start={[0, 0]}
      end={[1, 1]}
      borderColor={borderColor}
      inputColor={color}
    >
      <ButtonElement
        inputColor={color}
        {...rest}
      >
        <Feather
          name={icon}
          size={28}
          color={iconColor}
        />
      </ButtonElement>
    </Container>
  );
};

export default CircleButton;
