import React from 'react';

import {
  Container,
  ButtonElement,
  TitleView,
  TitleText,
  TaskDataArea,
  TaskDataView,
  TaskDataIcon,
  TaskDataText,
  DeleteButtonView,
} from './styles';
import theme from '../../global/styles/theme';
import CircleButton from '../CircleButton';

// TaskItem properties
export interface ITaskItemProps {
  id: string;
  title: string;
  time: string;
  period: string;
  description: string;
}

// Theme colors
const { baby_blue90, baby_blue80, blue } = theme.colors;

// Component
const TaskItem: React.FC<ITaskItemProps> = ({
  title,
  time,
  period,
  description,
}) => {
  return (
    <Container
      colors={[baby_blue90, blue]}
    >
      <ButtonElement>
        <TitleView>
          <TitleText
            style={{ textAlignVertical: 'center' }}
          >
            {title}
          </TitleText>
        </TitleView>

        <TaskDataArea>
          <TaskDataView>
            <TaskDataIcon
              name="clock"
              size={18}
              color={baby_blue80}
            />
            <TaskDataText>{time}</TaskDataText>
          </TaskDataView>
          <TaskDataView>
            <TaskDataIcon
              name="calendar"
              size={18}
              color={baby_blue80}
            />
            <TaskDataText>{period}</TaskDataText>
          </TaskDataView>
          <TaskDataView>
            <TaskDataIcon
              name="type"
              size={18}
              color={baby_blue80}
            />
            <TaskDataText>{description}</TaskDataText>
          </TaskDataView>
        </TaskDataArea>
      </ButtonElement>

      <DeleteButtonView>
        <CircleButton
          color="danger"
          icon="trash-2"
        />
      </DeleteButtonView>
    </Container>
  );
};

export default TaskItem;
