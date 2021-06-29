import React, { useState } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import theme from '../../global/styles/theme';

interface ICircleButton extends RectButtonProps {
  icon?: 'check' | 'trash-2';
  color?: 'confirm' | 'danger';
}

const {
  baby_blue90,
  cyan100,
  danger100,
  danger90,
} = theme.colors;

const gradientColors = [
  [baby_blue90, cyan100],
  [danger100, danger90],
];

const iconColors = [
  baby_blue90,
  danger90,
];

const borderColors = [
  cyan100,
  danger90,
];

const CircleButton: React.FC<ICircleButton> = ({
  icon = 'check',
  color = 'confirm',
  ...rest
}) => {
  const [colorIndexes] = useState(
    (function () {
      switch (color) {
        case 'confirm': return 0;
        case 'danger': return 1;
        default: return 0;
      }
    }()),
  );

  return (
    <LinearGradient
      colors={gradientColors[colorIndexes]}
      style={[
        styles.container,
        { borderColor: borderColors[colorIndexes] },
      ]}
      start={[0, 0]}
      end={[1, 1]}
    >
      <RectButton
        style={styles.content}
        {...rest}
      >
        <Feather
          name={icon}
          size={28}
          color={iconColors[colorIndexes]}
        />
      </RectButton>
    </LinearGradient>
  );
};

export default CircleButton;
