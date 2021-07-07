import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface IContainerProps {
  small: boolean;
}

interface IButtonTextProps {
  checked: boolean;
}

// Theme colors and fonts
const { baby_blue90 } = theme.colors;
const { heebo500 } = theme.fonts;

export const Container = styled(LinearGradient)<IContainerProps>`
  width: ${(props) => (props.small ? '20%' : '80%')};
  height: 50px;
  border-radius: 50px;
  margin: 5px;
  padding: 2px;

  align-items: center;
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
