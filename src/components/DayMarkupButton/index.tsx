import React, { useState, useCallback } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container, InsideGradient, ButtonElement, ButtonText,
} from './styles';
import theme from '../../global/styles/theme';

interface IDayMarkupButtonProps extends RectButtonProps {
  id: string;
  name: string;
  checked?: boolean;
  small?: boolean;
  handleAlternatingChecks(id: string): void;
}

const {
  baby_blue100, baby_blue80, cyan90,
} = theme.colors;

const DayMarkupButton: React.FC<IDayMarkupButtonProps> = ({
  id,
  name,
  checked = false,
  small = false,
  handleAlternatingChecks,
  ...rest
}) => {
  const [buttonChecked, setButtonChecked] = useState(checked);

  const handleOnPressButton = useCallback((day_id: string) => {
    setButtonChecked(!buttonChecked);

    handleAlternatingChecks(day_id);
  }, [buttonChecked, handleAlternatingChecks]);

  return (
    <Container
      colors={buttonChecked ? [baby_blue80, cyan90] : [baby_blue100, cyan90]}
      start={[0, 0]}
      end={[1, 1]}
      small={small}
    >
      <InsideGradient
        colors={buttonChecked ? [baby_blue80, cyan90] : ['#FFFFFF', '#FFFFFF']}
      >
        <ButtonElement
          onPress={() => handleOnPressButton(id)}
          {...rest}
        >
          <ButtonText checked={buttonChecked}>
            {name}
          </ButtonText>
        </ButtonElement>
      </InsideGradient>
    </Container>
  );
};

export default DayMarkupButton;
