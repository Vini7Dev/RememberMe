import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import theme from '../../global/styles/theme';

interface IContainerProps {
  inputColor: 'confirm' | 'danger' | 'transparent_blue';
  borderColor: string;
}

interface IContentProps {
  inputColor: 'confirm' | 'danger' | 'transparent_blue';
  borderColor: string;
}

export const Container = styled(LinearGradient)<IContainerProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  ${(props) => (
    props.inputColor !== 'transparent_blue' && css`
      border-width: 2px;
      border-color: ${props.borderColor};
    `
  )}
`;

export const ButtonElement = styled(RectButton)<IContentProps>`
  border-radius: 20px;

  ${(props) => (
    props.inputColor === 'transparent_blue' && css`
      width: 36px;
      height: 36px;
      justify-content: center;
      align-items: center;
      background-color: #FFFFFF;
      padding-top: 5px;
    `
  )}
`;
