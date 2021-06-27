import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import IconBlueIMG from '../../assets/icon_blue.png';
import theme from '../../global/styles/theme';
import styles from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Teste: React.FC = () => {
  const { baby_blue90, cyan90 } = theme.colors;

  return (
    <LinearGradient
      colors={[baby_blue90, cyan90]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={[styles.logoView, { marginBottom: 5 }]}>
          <Image style={styles.logo} source={IconBlueIMG} />
          <Text style={styles.appName}>RememberMe</Text>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={styles.greetings}>Bem-Vindo(a)!</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.question}>Como gostaria de ser chamado(a)?</Text>

          <Input
            placeholder="Informe seu nome ou apelido"
          />

          <Button
            name="Prosseguir"
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Teste;
