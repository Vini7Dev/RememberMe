import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const { baby_blue70, cyan90, text } = theme.colors;
const { poppins600, heebo400, heebo500 } = theme.fonts;

export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background-color: #FFFFFF;
  width: 90%;
  border-radius: 25;
  justify-content: center;
  align-items: center;
  padding: 50px 15px;
`;

export const LogoView = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Logo = styled.Image`
  width: 91px;
  height: 75px;
`;

export const AppNameText = styled.Text`
  font-size: 20px;
  font-family: ${poppins600};
  color: ${baby_blue70};
`;

export const GreetingsView = styled.View`
  margin-bottom: 30px;
`;

export const GreetingsText = styled.Text`
  color: ${cyan90};
  font-size: 35px;
  font-family: ${heebo500};
`;

export const Form = styled.View`
  width: 100%;
`;

export const QuestionText = styled.Text`
  font-size: 18px;
  font-family: ${heebo400};
  color: ${text};
`;
