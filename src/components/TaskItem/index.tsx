import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import theme from '../../global/styles/theme';
import CircleButton from '../CircleButton';

export interface ITaskItemProps {
  id: string;
  title: string;
  time: string;
  period: string;
  description: string;
}

const TaskItem: React.FC<ITaskItemProps> = ({
  title,
  time,
  period,
  description,
}) => {
  const {
    baby_blue90, baby_blue80, blue,
  } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[baby_blue90, blue]}
    >
      <RectButton style={styles.content}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.taskData}>
          <View style={styles.dataView}>
            <Feather
              name="clock"
              size={18}
              color={baby_blue80}
              style={styles.dataIcon}
            />
            <Text style={styles.dataText}>{time}</Text>
          </View>
          <View style={styles.dataView}>
            <Feather
              name="calendar"
              size={18}
              color={baby_blue80}
              style={styles.dataIcon}
            />
            <Text style={styles.dataText}>{period}</Text>
          </View>
          <View style={styles.dataView}>
            <Feather
              name="type"
              size={18}
              color={baby_blue80}
              style={styles.dataIcon}
            />
            <Text style={styles.dataText}>{description}</Text>
          </View>
        </View>
      </RectButton>

      <View style={styles.checkButtonView}>
        <CircleButton
          color="danger"
          icon="trash-2"
        />
      </View>
    </LinearGradient>
  );
};

export default TaskItem;
