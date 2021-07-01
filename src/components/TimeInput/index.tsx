import React from 'react';
import {
  View, TextInput, TextInputProps, KeyboardAvoidingView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import theme from '../../global/styles/theme';

const TimeInput: React.FC<TextInputProps> = ({ ...rest }) => {
  const { baby_blue70, blue } = theme.colors;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <LinearGradient
          colors={[baby_blue70, blue]}
          style={styles.inputBorder}
        >
          <TextInput
            style={styles.input}
            placeholder="__"
            keyboardType="numeric"
            {...rest}
          />
        </LinearGradient>
      </KeyboardAvoidingView>
    </View>
  );
};

export default TimeInput;
