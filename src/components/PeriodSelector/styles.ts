import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface IButtonTextProps {
  selected: boolean;
}

const { baby_blue90 } = theme.colors;
const { poppins600 } = theme.fonts;

export const Container = styled(LinearGradient)`
  height: 40px;
  width: 100%;
  border-radius: 20px;
  margin: 10px auto;
  padding: 2px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonViewLeft = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-right-color: #00A6CB;
  border-right-width: 1px;
`;

export const ButtonViewRight = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: #00A6CB;
  border-left-width: 1px;
`;

export const ButtonLeftGradient = styled(LinearGradient)`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ButtonRightGradient = styled(LinearGradient)`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ButtonElement = styled(RectButton)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<IButtonTextProps>`
  color: ${(props) => (props.selected ? '#FFFFFF' : baby_blue90)};
  font-family: ${poppins600};
  font-size: 18px;
  line-height: 26px;
`;
