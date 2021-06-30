import React from 'react';
import {
  View, Text, TextInput, TextInputProps,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import theme from '../../global/styles/theme';

interface ITextAreaProps extends TextInputProps {
  label?: string;
}

const TextArea: React.FC<ITextAreaProps> = ({
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
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={5}
          {...rest}
        />
      </LinearGradient>
    </View>
  );
};

export default TextArea;
