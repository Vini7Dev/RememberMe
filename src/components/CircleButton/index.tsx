import React, { useState, useEffect } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import theme from '../../global/styles/theme';

interface ICircleButton extends RectButtonProps {
  icon?: 'check' | 'trash-2' | 'filter';
  color?: 'confirm' | 'danger' | 'transparent_blue';
}

const {
  baby_blue100,
  baby_blue90,
  blue,
  cyan100,
  danger100,
  danger90,
} = theme.colors;

const CircleButton: React.FC<ICircleButton> = ({
  icon = 'check',
  color = 'confirm',
  ...rest
}) => {
  const [iconColor, setIconColor] = useState(baby_blue90);
  const [borderColor, setBorderColor] = useState(cyan100);
  const [gradientColor, setGradientColor] = useState<string[]>([baby_blue90, cyan100]);

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
    <LinearGradient
      colors={gradientColor}
      style={[
        color === 'transparent_blue' ? styles.containerTransparent : styles.container,
        { borderColor },
      ]}
      start={[0, 0]}
      end={[1, 1]}
    >
      <RectButton
        style={
          color === 'transparent_blue' ? styles.contentTransparent : styles.content
        }
        {...rest}
      >
        <Feather
          name={icon}
          size={28}
          color={iconColor}
        />
      </RectButton>
    </LinearGradient>
  );
};

export default CircleButton;
