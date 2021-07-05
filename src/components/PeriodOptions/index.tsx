import React from 'react';

import {
  Container,
} from './styles';
import { IDayProps } from '../../utils/DefaultDaysData';
import DayMarkupButton from '../DayMarkupButton';

interface IPeriodOptionsProps {
  renderButtons?: boolean;
  periodType: number;
  monthDays: IDayProps[];
  weekDays: IDayProps[];
  onPressDayMarkupButton(id: string): void;
}

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
        renderButtons
          && (periodType === 0
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
