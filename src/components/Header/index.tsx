import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import theme from '../../global/styles/theme';
import LogoIMG from '../../assets/icon.png';

interface IHeaderProps {
  name: string;
}

const Header: React.FC<IHeaderProps> = ({
  name,
}) => {
  const { baby_blue90, cyan90 } = theme.colors;
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentHour = (new Date()).getHours();

    if (currentHour > 0 && currentHour < 12) {
      setMessage('Tenha um bom dia!');
    } else if (currentHour < 18) {
      setMessage('Tenha uma excelente tarde!');
    } else {
      setMessage('Tenha uma noite agradável!');
    }
  }, []);

  return (
    <LinearGradient
      colors={[baby_blue90, cyan90]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={LogoIMG}
          style={styles.logo}
        />

        <View>
          <View style={styles.nameView}>
            <Text style={styles.helloMessage}>Olá, </Text>
            <Text style={styles.name}>{name}</Text>
          </View>
          <Text style={styles.greeting}>{ message }</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;
