import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import theme from '../../global/styles/theme';

interface IButtonProps extends RectButtonProps {
  name: string;
}

const Button: React.FC<IButtonProps> = ({
  name,
  ...rest
}) => {
  const { baby_blue100, cyan90 } = theme.colors;

  return (
    <LinearGradient
      colors={[baby_blue100, cyan90]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      <RectButton style={styles.content} {...rest}>
        <Text style={styles.name}>{name}</Text>
      </RectButton>
    </LinearGradient>
  );
};

export default Button;
