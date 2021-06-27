import React from 'react';
import {
  View, Text, TextInput, TextInputProps,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import theme from '../../global/styles/theme';

interface IInputProps extends TextInputProps {
  label?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  ...rest
}) => {
  const { baby_blue70, blue } = theme.colors;

  return (
    <View style={styles.container}>
      {
        label && <Text style={styles.label}>{label}</Text>
      }
      <LinearGradient
        colors={[baby_blue70, blue]}
        style={styles.inputBorder}
      >
        <TextInput style={styles.input} placeholder="Teste teste" {...rest} />
      </LinearGradient>
    </View>
  );
};

export default Input;
