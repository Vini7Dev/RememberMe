import React, { useState } from 'react';
import {
  View, Text, FlatList, ScrollView,
} from 'react-native';
import styles from './styles';
import TodayTask, { ITodayTaskProps } from '../../components/TodayTask';
import TaskItem, { ITaskItemProps } from '../../components/TaskItem';
import Header from '../../components/Header';
import UpperWhiteBackground from '../../components/UpperWhiteBackground';
import CircleButton from '../../components/CircleButton';
import Button from '../../components/Button';

const tasksExample = [
  {
    id: '1', title: 'Tomar Remédio', time: '09:30', period: 'Dia 28', description: 'Tomar 10ml do remédio XYZ com bastante água.',
  },
  {
    id: '2', title: 'Estudar React Native', time: '14:00', period: 'Segunda', description: 'Sem descrição...',
  },
  {
    id: '3', title: 'Ir no Centro', time: '17:00', period: 'Terça e Sexta', description: 'Levar garrafinha',
  },
  {
    id: '4', title: 'Fazer Exercício', time: '18:25', period: 'Segunda, Terça, Quarta, Quinta e Sexta', description: 'Sem descrição...',
  },
];

const Home: React.FC = () => {
  const [todayTasks, setTodayTasks] = useState<ITodayTaskProps[]>(tasksExample);
  const [allTasks, setAllTasks] = useState<ITaskItemProps[]>(tasksExample);

  return (
    <ScrollView style={styles.container}>
      <Header name="Vinícius" />

      <UpperWhiteBackground>
        <View style={styles.titleView}>
          <Text style={styles.title}>Tarefas do Dia</Text>
          <Text style={styles.subtitle}>28/06/2021</Text>
        </View>

        <FlatList
          style={{ marginTop: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
          data={todayTasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <TodayTask
              id={item.id}
              title={item.title}
              time={item.time}
              period={item.period}
              description={item.description}
            />
          )}
        />
      </UpperWhiteBackground>

      <View style={styles.tasksListArea}>
        <View style={styles.tasksListTitleView}>
          <Text style={styles.tasksListTitle}>Tarefas</Text>

          <View style={styles.filterButtonView}>
            <CircleButton
              color="transparent_blue"
              icon="filter"
            />
          </View>
        </View>

        <Button
          name="Adicionar"
          wSize="100%"
          color="lightBlue"
          icon="plus"
        />

        <FlatList
          style={{ marginTop: 10, flexGrow: 0 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
          data={allTasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <TaskItem
              id={item.id}
              title={item.title}
              time={item.time}
              period={item.period}
              description={item.description}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
