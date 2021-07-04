import React from 'react';

import {
  Container,
} from './styles';
import { IDayProps } from '../../utils/DefaultDaysData';
import MarkupButton from '../MarkupButton';

interface IPeriodOptionsProps {
  renderButtons?: boolean;
  periodType: number;
  monthDays: IDayProps[];
  weekDays: IDayProps[];
}

const PeriodOptions: React.FC<IPeriodOptionsProps> = ({
  renderButtons = false,
  periodType,
  monthDays,
  weekDays,
}) => {
  return (
    <Container periodType={periodType} renderButtons={renderButtons}>
      {
        renderButtons
          && (periodType === 0
            ? monthDays.map(({ id, value, checked }) => (
              <MarkupButton
                key={id}
                small
                id={id}
                name={value}
                checked={checked}
                handleAlternatingChecks={console.log}
              />
            ))

            : weekDays.map(({ id, value, checked }) => (
              <MarkupButton
                key={id}
                id={id}
                name={value}
                checked={checked}
                handleAlternatingChecks={console.log}
              />
            )))
      }
    </Container>
  );
};

export default PeriodOptions;
