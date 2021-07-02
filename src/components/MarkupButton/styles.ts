import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface IButtonTextProps {
  checked: boolean;
}

const { baby_blue90 } = theme.colors;
const { heebo500 } = theme.fonts;

export const Container = styled(LinearGradient)`
  width: 80%;
  height: 50px;
  border-radius: 50px;
  margin: 5px auto;
  padding: 2px;
`;

export const InsideGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const ButtonElement = styled(RectButton)`
  border-radius: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<IButtonTextProps>`
  font-size: 25px;
  font-family: ${heebo500};
  line-height: 35px;
  color: ${(props) => (props.checked ? '#FFFFFF' : baby_blue90)}
`;
