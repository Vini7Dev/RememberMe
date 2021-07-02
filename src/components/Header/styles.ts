import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const { white_transparent } = theme.colors;
const { heebo400, heebo700 } = theme.fonts;

export const Container = styled(LinearGradient)`
    width: 100%;
    height: 102px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 20px;
    padding-top: 40px;
    justify-content: center;
    elevation: 11;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const NameView = styled.View`
  flex-direction: row;
  margin-bottom: -5px;
`;

export const HelloMessage = styled.Text`
  color: #FFFFFF;
  font-family: ${heebo400};
  font-size: 22px;
  line-height: 28px;
`;

export const NameText = styled.Text`
    color: #FFFFFF;
    font-family: ${heebo700};
    font-size: 22px;
    line-height: 28px;
`;

export const Greeting = styled.Text`
  color: ${white_transparent};
  font-family: ${heebo400};
  font-size: 12px;
  line-height: 15px;
`;
