import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

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

const Greetings: React.FC = () => {
  const navigation = useNavigation();
  const { baby_blue90, cyan90 } = theme.colors;

  const handleNavigateToHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

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
          />

          <Button
            name="Prosseguir"
            wSize="80%"
            color="lightBlue"
            onPress={handleNavigateToHome}
          />
        </Form>
      </Content>
    </Container>
  );
};

export default Greetings;
