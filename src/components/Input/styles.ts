import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const { baby_blue90 } = theme.colors;
const { heebo400, heebo500 } = theme.fonts;

export const Container = styled.View`
  width: 100%;
  position: relative;
  margin-top: 10px;
`;

export const Label = styled.Text`
    position: absolute;
    top: -10px;
    left: 25px;
    color: ${baby_blue90};
    font-size: 20px;
    font-family: ${heebo500};
    line-height: 22px;
    padding: 0 5px;
    background-color: #FFFFFF;
    z-index: 1;
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
    font-size: 18px;
`;
