import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface IContainerProps {
  wSize: string;
}

// Theme fonts
const { poppins600 } = theme.fonts;

export const Container = styled(LinearGradient)<IContainerProps>`
    width: ${(props) => props.wSize};
    height: 40px;
    border-radius: 20px;
    margin: 10px auto;
`;

export const ButtonElement = styled(RectButton)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-family: ${poppins600};
`;
