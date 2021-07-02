import React from 'react';

import {
  Container,
  ButtonViewLeft,
  ButtonViewRight,
  ButtonLeftGradient,
  ButtonRightGradient,
  ButtonElement,
  ButtonText,
} from './styles';
import theme from '../../global/styles/theme';

const { baby_blue100, cyan90 } = theme.colors;

interface IPeriodSelectorProps {
  optionSelected: number;
  onPressInLeftButton(): void;
  onPressInRightButton(): void;
}

const PeriodSelector: React.FC<IPeriodSelectorProps> = ({
  optionSelected,
  onPressInLeftButton,
  onPressInRightButton,
}) => {
  return (
    <Container
      colors={[baby_blue100, cyan90]}
    >
      <ButtonViewLeft>
        <ButtonLeftGradient
          colors={optionSelected === 0 ? [baby_blue100, cyan90] : ['#FFFFFF', '#FFFFFF']}
          start={[0, 0]}
          end={[1, 1]}
        >
          <ButtonElement onPress={onPressInLeftButton}>
            <ButtonText selected={optionSelected === 0}>
              Dia do Mês
            </ButtonText>
          </ButtonElement>
        </ButtonLeftGradient>
      </ButtonViewLeft>

      <ButtonViewRight>
        <ButtonRightGradient
          colors={optionSelected === 1 ? [baby_blue100, cyan90] : ['#FFFFFF', '#FFFFFF']}
          start={[0, 0]}
          end={[1, 1]}
        >
          <ButtonElement onPress={onPressInRightButton}>
            <ButtonText selected={optionSelected === 1}>
              Dia da Semana
            </ButtonText>
          </ButtonElement>
        </ButtonRightGradient>
      </ButtonViewRight>
    </Container>
  );
};

export default PeriodSelector;
