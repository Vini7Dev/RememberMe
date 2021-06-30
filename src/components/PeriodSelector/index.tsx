import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import theme from '../../global/styles/theme';

const { baby_blue100, cyan90 } = theme.colors;

const PeriodSelector: React.FC = () => {
  return (
    <LinearGradient
      colors={[baby_blue100, cyan90]}
      style={[
        styles.container,
      ]}
    >
      <View style={[
        styles.buttonView,
        styles.btnLeft,
      ]}
      >
        <LinearGradient
          style={[styles.btnLeft]}
          colors={[baby_blue100, cyan90]}
          start={[0, 0]}
          end={[1, 1]}
        >
          <RectButton style={styles.button}>
            <Text style={styles.bntSelectedText}>Dia do Mês</Text>
          </RectButton>
        </LinearGradient>
      </View>

      <View style={[
        styles.buttonView,
        styles.btnRight,
      ]}
      >
        <LinearGradient
          style={[styles.btnRight]}
          colors={['#FFFFFF', '#FFFFFF']}
          start={[0, 0]}
          end={[1, 1]}
        >
          <RectButton style={styles.button}>
            <Text style={styles.bntText}>Dia da Semana</Text>
          </RectButton>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default PeriodSelector;
