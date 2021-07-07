import React, { useState, useCallback } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container, InsideGradient, ButtonElement, ButtonText,
} from './styles';
import theme from '../../global/styles/theme';

// DayMarkupButton properties
interface IDayMarkupButtonProps extends RectButtonProps {
  id: string;
  name: string;
  checked?: boolean;
  small?: boolean;
  handleAlternatingChecks(id: string): void;
}

// Theme colors
const {
  baby_blue100, baby_blue80, cyan90,
} = theme.colors;

// Component
const DayMarkupButton: React.FC<IDayMarkupButtonProps> = ({
  id,
  name,
  checked = false,
  small = false,
  handleAlternatingChecks,
  ...rest
}) => {
  // Button checked state
  const [buttonChecked, setButtonChecked] = useState(checked);

  // Toggle markup value
  const handleOnPressButton = useCallback((day_id: string) => {
    // Toggle value
    setButtonChecked(!buttonChecked);

    // Update list of verified days
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
            {small ? name.toString().padStart(2, '0') : name}
          </ButtonText>
        </ButtonElement>
      </InsideGradient>
    </Container>
  );
};

export default DayMarkupButton;
