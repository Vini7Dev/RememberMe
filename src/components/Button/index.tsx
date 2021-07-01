import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import styles from './styles';
import theme from '../../global/styles/theme';

interface IButtonProps extends RectButtonProps {
  name: string;
  wSize: '100%' | '80%' | '50%';
  color: 'blue' | 'lightBlue';
  icon?: 'plus' | 'edit-3';
}

const { baby_blue100, baby_blue80, cyan90 } = theme.colors;

const Button: React.FC<IButtonProps> = ({
  name,
  wSize,
  color,
  icon,
  ...rest
}) => {
  const [gradientColor, setGradientColor] = useState<string[]>([baby_blue80, cyan90]);

  useEffect(() => {
    switch (color) {
      case 'blue':
        setGradientColor([baby_blue80, cyan90]);
        break;
      case 'lightBlue':
        setGradientColor([baby_blue100, cyan90]);
        break;
      default:
        setGradientColor([baby_blue80, cyan90]);
        break;
    }
  }, [color]);

  return (
    <LinearGradient
      colors={gradientColor}
      start={[0, 0]}
      end={[1, 1]}
      style={[
        styles.container,
        { width: wSize },
      ]}
    >
      <RectButton style={styles.content} {...rest}>
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
        <Text style={styles.name}>{name}</Text>
      </RectButton>
    </LinearGradient>
  );
};

export default Button;
