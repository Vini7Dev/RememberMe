import React from 'react';

import {
  Container, Button, TitleView, TitleText, TaskData, DataView, DataIcon, DataText, CheckButtonView,
} from './styles';
import theme from '../../global/styles/theme';
import CircleButton from '../CircleButton';

export interface ITodayTaskProps {
  id: string;
  title: string;
  time: string;
  period: string;
  description: string;
}

const TodayTask: React.FC<ITodayTaskProps> = ({
  title,
  time,
  period,
  description,
}) => {
  const {
    baby_blue90, baby_blue80, blue,
  } = theme.colors;

  return (
    <Container colors={[baby_blue90, blue]}>
      <Button>
        <TitleView>
          <TitleText
            style={{ textAlignVertical: 'center' }}
          >
            {title}
          </TitleText>
        </TitleView>

        <TaskData>
          <DataView>
            <DataIcon
              name="clock"
              size={18}
              color={baby_blue80}
            />
            <DataText>{time}</DataText>
          </DataView>
          <DataView>
            <DataIcon
              name="calendar"
              size={18}
              color={baby_blue80}
            />
            <DataText>{period}</DataText>
          </DataView>
          <DataView>
            <DataIcon
              name="type"
              size={18}
              color={baby_blue80}
            />
            <DataText>{description}</DataText>
          </DataView>
        </TaskData>
      </Button>

      <CheckButtonView>
        <CircleButton />
      </CheckButtonView>
    </Container>
  );
};

export default TodayTask;
