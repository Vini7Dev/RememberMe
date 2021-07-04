import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container, InsideGradient, ButtonElement, ButtonText,
} from './styles';
import theme from '../../global/styles/theme';

interface IMarkupButtonProps extends RectButtonProps {
  id: string;
  name: string;
  checked?: boolean;
  small?: boolean;
  handleAlternatingChecks(id: string): void;
}

const {
  baby_blue100, baby_blue80, cyan90,
} = theme.colors;

const MarkupButton: React.FC<IMarkupButtonProps> = ({
  id,
  name,
  checked = false,
  small = false,
  handleAlternatingChecks,
  ...rest
}) => {
  return (
    <Container
      colors={checked ? [baby_blue80, cyan90] : [baby_blue100, cyan90]}
      start={[0, 0]}
      end={[1, 1]}
      small={small}
    >
      <InsideGradient
        colors={checked ? [baby_blue80, cyan90] : ['#FFFFFF', '#FFFFFF']}
      >
        <ButtonElement
          onPress={() => handleAlternatingChecks(id)}
          {...rest}
        >
          <ButtonText
            checked={checked}
          >
            {name}
          </ButtonText>
        </ButtonElement>
      </InsideGradient>
    </Container>
  );
};

export default MarkupButton;
