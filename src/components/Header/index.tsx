import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_USERNAME } from '../../global/configs/storage';
import {
  Container, Content, UpdateNameButton, Image, NameView, HelloMessage, NameText, Greeting,
} from './styles';
import theme from '../../global/styles/theme';
import LogoIMG from '../../assets/icon.png';

// Theme colors
const { baby_blue90, cyan90 } = theme.colors;

// Component
const Header: React.FC = () => {
  // Navigation
  const navigation = useNavigation();

  // Component properties
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Navigate to Greetings screen to update username
  const handleNavigateToGreetings = useCallback(() => {
    navigation.navigate('Greetings', { toUpdateUsername: true });
  }, [navigation]);

  // Set greeting message according to time of day
  useEffect(() => {
    const loadingData = async () => {
      const currentHour = (new Date()).getHours();

      if (currentHour > 0 && currentHour < 12) {
        setMessage('Tenha um bom dia!');
      } else if (currentHour < 18) {
        setMessage('Tenha uma excelente tarde!');
      } else {
        setMessage('Tenha uma noite agradável!');
      }

      const nameSaved = await AsyncStorage.getItem(COLLECTION_USERNAME);

      setName(nameSaved || '');
    };

    loadingData();
  }, []);

  return (
    <Container
      colors={[baby_blue90, cyan90]}
    >
      <Content>
        <Image
          source={LogoIMG}
        />

        <UpdateNameButton
          activeOpacity={0.65}
          onPress={handleNavigateToGreetings}
        >
          <NameView>
            <HelloMessage>Olá, </HelloMessage>
            <NameText>{name}</NameText>
          </NameView>
          <Greeting>{ message }</Greeting>
        </UpdateNameButton>
      </Content>
    </Container>
  );
};

export default Header;
