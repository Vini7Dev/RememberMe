import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import theme from '../../global/styles/theme';

const CircleButton: React.FC<RectButtonProps> = ({ ...rest }) => {
  const { baby_blue90, cyan100 } = theme.colors;

  return (
    <LinearGradient
      colors={[baby_blue90, cyan100]}
      style={styles.container}
    >
      <RectButton
        {...rest}
      >
        <Feather
          name="check"
          size={28}
          color="#00C8F3"
        />
      </RectButton>
    </LinearGradient>
  );
};

export default CircleButton;
