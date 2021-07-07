import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_USERNAME } from '../../global/configs/storage';
import IconBlueIMG from '../../assets/icon_blue.png';
import theme from '../../global/styles/theme';
import {
  Container,
  Content,
  LogoView,
  Logo,
  AppNameText,
  GreetingsView,
  GreetingsText,
  Form,
  QuestionText,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

// Theme colors
const { baby_blue90, cyan90 } = theme.colors;

// Screen component
const Greetings: React.FC = () => {
  // Navigation
  const navigation = useNavigation();

  // Screen state
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [name, setName] = useState('');

  // On press continue button, navigate to Home screen
  const handleNavigateToHome = useCallback(async () => {
    // Start loading
    setIsLoading(true);

    // Saving name in storage
    await AsyncStorage.setItem(COLLECTION_USERNAME, name);

    // Navigate to Home screen
    navigation.navigate('Home');

    // Stop loading
    setIsLoading(false);
  }, [name, navigation]);

  return (
    <Container colors={[baby_blue90, cyan90]}>
      <Content>
        <LogoView>
          <Logo source={IconBlueIMG} />
          <AppNameText>RememberMe</AppNameText>
        </LogoView>

        <GreetingsView>
          <GreetingsText>Bem-Vindo(a)!</GreetingsText>
        </GreetingsView>

        <Form>
          <QuestionText>Como gostaria de ser chamado(a)?</QuestionText>

          <Input
            placeholder="Informe seu nome ou apelido"
            onChangeText={(text) => setName(text)}
          />

          <Button
            name="Prosseguir"
            wSize="80%"
            color="lightBlue"
            onPress={handleNavigateToHome}
          />
        </Form>
      </Content>

      {
        isLoading && <Loading />
      }
    </Container>
  );
};

export default Greetings;
