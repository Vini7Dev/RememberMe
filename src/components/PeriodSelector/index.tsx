import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import theme from '../../global/styles/theme';

const { baby_blue100, cyan90 } = theme.colors;

interface IPeriodSelectorProps {
  optionSelected: number;
  onPressInLeftButton(): void;
  onPressInRightButton(): void;
}

const PeriodSelector: React.FC<IPeriodSelectorProps> = ({
  optionSelected,
  onPressInLeftButton,
  onPressInRightButton,
}) => {
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
          colors={optionSelected === 0 ? [baby_blue100, cyan90] : ['#FFFFFF', '#FFFFFF']}
          start={[0, 0]}
          end={[1, 1]}
        >
          <RectButton
            style={styles.button}
            onPress={onPressInLeftButton}
          >
            <Text
              style={optionSelected === 0 ? styles.bntSelectedText : styles.bntText}
            >
              Dia do Mês

            </Text>
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
          colors={optionSelected === 1 ? [baby_blue100, cyan90] : ['#FFFFFF', '#FFFFFF']}
          start={[0, 0]}
          end={[1, 1]}
        >
          <RectButton
            style={styles.button}
            onPress={onPressInRightButton}
          >
            <Text
              style={optionSelected === 1 ? styles.bntSelectedText : styles.bntText}
            >
              Dia da Semana
            </Text>
          </RectButton>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default PeriodSelector;
