import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const { baby_blue90, cyan90 } = theme.colors;

const Greetings: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');

  const handleNavigateToHome = useCallback(async () => {
    setIsLoading(true);

    await AsyncStorage.setItem('@RememberMe:name', name);

    navigation.navigate('Home');

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
