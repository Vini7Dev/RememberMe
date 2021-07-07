import React from 'react';

import {
  Container,
} from './styles';
import { IDayProps } from '../../utils/DefaultDaysData';
import DayMarkupButton from '../DayMarkupButton';

// PeriodOptions properties
interface IPeriodOptionsProps {
  renderButtons?: boolean;
  periodType: number;
  monthDays: IDayProps[];
  weekDays: IDayProps[];
  onPressDayMarkupButton(id: string): void;
}

// Component
const PeriodOptions: React.FC<IPeriodOptionsProps> = ({
  renderButtons = false,
  periodType,
  monthDays,
  weekDays,
  onPressDayMarkupButton,
}) => {
  return (
    <Container periodType={periodType} renderButtons={renderButtons}>
      {
        // Render markup buttons
        renderButtons
          && (periodType === 0
            // Render month day options
            ? monthDays.map(({ id, value, checked }) => (
              <DayMarkupButton
                key={id}
                small
                id={id}
                name={value}
                checked={checked}
                handleAlternatingChecks={onPressDayMarkupButton}
              />
            ))

            // Show week day options
            : weekDays.map(({ id, value, checked }) => (
              <DayMarkupButton
                key={id}
                id={id}
                name={value}
                checked={checked}
                handleAlternatingChecks={onPressDayMarkupButton}
              />
            )))
      }
    </Container>
  );
};

export default PeriodOptions;
