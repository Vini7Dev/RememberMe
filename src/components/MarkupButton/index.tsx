import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import theme from '../../global/styles/theme';

interface IMarkupButtonProps extends RectButtonProps {
  id: string;
  name: string;
  checked: boolean;
  handleAlternatingChecks(id: string): void;
}

const {
  baby_blue100, baby_blue90, baby_blue80, cyan90,
} = theme.colors;

const MarkupButton: React.FC<IMarkupButtonProps> = ({
  id,
  name,
  checked,
  handleAlternatingChecks,
  ...rest
}) => {
  return (
    <LinearGradient
      colors={checked ? [baby_blue80, cyan90] : [baby_blue100, cyan90]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      <LinearGradient
        colors={checked ? [baby_blue80, cyan90] : ['#FFFFFF', '#FFFFFF']}
        style={styles.insideGradient}
      >
        <RectButton
          style={styles.content}
          onPress={() => handleAlternatingChecks(id)}
          {...rest}
        >
          <Text
            style={[
              styles.name,
              { color: checked ? '#FFFFFF' : baby_blue90 },
            ]}
          >
            {name}
          </Text>
        </RectButton>
      </LinearGradient>
    </LinearGradient>
  );
};

export default MarkupButton;
