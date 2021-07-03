import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const { heebo400 } = theme.fonts;

export const Conteiner = styled.View`
  width: 80px;
  position: relative;
  margin-top: 10px;
`;

export const InputBorder = styled(LinearGradient)`
  height: 54px;
  border-radius: 26px;
  padding: 2px;
`;

export const TextInput = styled.TextInput`
  height: 100%;
  border-radius: 26px;
  background-color: #FFFFFF;
  padding: 0 10px;
  font-family: ${heebo400};
  font-size: 24px;
  text-align: center;
`;
