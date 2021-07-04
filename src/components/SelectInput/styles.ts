import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface IContainerProps {
  wSize: '100%' | '110px';
}

const { baby_blue90, text } = theme.colors;
const { heebo400, heebo500 } = theme.fonts;

export const Container = styled.View<IContainerProps>`
  width: ${(props) => props.wSize};
  position: relative;
  margin: 10px auto 0;
`;

export const Label = styled.Text`
    position: absolute;
    top: -10px;
    left: 25px;
    color: ${baby_blue90};
    font-size: 20px;
    font-family: ${heebo500};
    line-height: 26px;
    padding: 0 5px;
    background-color: #FFFFFF;
    z-index: 1;
`;

export const InputBorder = styled(LinearGradient)`
  height: 54px;
  border-radius: 26px;
  padding: 2px;
`;

export const PickerContainer = styled.View`
    height: 100%;
    width: 100%;
    border-radius: 26px;
    background-color: #FFFFFF;
    padding: 0 10px;
`;

export const PickerElement = styled(Picker)`
  flex: 1;
  font-size: 18px;
  font-family: ${heebo400};
  color: ${text};
`;
