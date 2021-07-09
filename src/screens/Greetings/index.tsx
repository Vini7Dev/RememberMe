import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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

// Route prarameters
interface IRouteParams {
  toUpdateUsername?: boolean;
}

// Theme colors
const { baby_blue90, cyan90 } = theme.colors;

// Screen component
const Greetings: React.FC = () => {
  // Navigation and route
  const navigation = useNavigation();
  const route = useRoute();

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
    navigation.reset({
      routes: [{ name: 'Home' }],
      index: 0,
    });

    // Stop loading
    setIsLoading(false);
  }, [name, navigation]);

  // Check if username is already registered
  useEffect(() => {
    // Parse route parameters to route parms interface
    const params = route.params as IRouteParams;

    // Check if user don't want update your username
    if (!params || !params.toUpdateUsername) {
      // Load username from async storage
      const handleLoadNameFromStorage = async () => {
        // Start loading
        setIsLoading(true);

        // Try to get username saved
        const savedName = await AsyncStorage.getItem(COLLECTION_USERNAME);

        // If username is already register, go to Home screen
        if (savedName) {
          navigation.reset({
            routes: [{ name: 'Home' }],
            index: 0,
          });
        }

        // Stop loading
        setIsLoading(false);
      };

      // Execute function to load name
      handleLoadNameFromStorage();
    }
  }, [navigation, route]);

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
