import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TitleView,
  TitleText,
  SubtitleText,
  TasksListArea,
  TasksListTitleView,
  TasksListTitleText,
  FilterButtonView,
  Form,
} from './styles';

import TodayTask, { ITodayTaskProps } from '../../components/TodayTask';
import TaskItem, { ITaskItemProps } from '../../components/TaskItem';
import Header from '../../components/Header';
import UpperWhiteBackground from '../../components/UpperWhiteBackground';
import CircleButton from '../../components/CircleButton';
import Input from '../../components/Input';
import PeriodSelector from '../../components/PeriodSelector';
import SelectInput from '../../components/SelectInput';
import Button from '../../components/Button';
import ModalContainer from '../../components/ModalContainer';

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
  const navigation = useNavigation();
  const [todayTasks, setTodayTasks] = useState<ITodayTaskProps[]>(tasksExample);
  const [allTasks, setAllTasks] = useState<ITaskItemProps[]>(tasksExample);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [periodType, setPeriodType] = useState(0);

  const navigateToCreateEditTask = useCallback((id?: string) => {
    navigation.navigate('CreateEditTask', { id });
  }, [navigation]);

  const handleToggleModalIsOpen = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  return (
    <Container>
      <Header name="Vinícius" />

      <UpperWhiteBackground>
        <TitleView>
          <TitleText>Tarefas do Dia</TitleText>
          <SubtitleText>28/06/2021</SubtitleText>
        </TitleView>

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

      <TasksListArea>
        <TasksListTitleView>
          <TasksListTitleText>Tarefas</TasksListTitleText>

          <FilterButtonView>
            <CircleButton
              color="transparent_blue"
              icon="filter"
              onPress={handleToggleModalIsOpen}
            />
          </FilterButtonView>
        </TasksListTitleView>

        <Button
          name="Adicionar"
          wSize="100%"
          color="blue"
          icon="plus"
          onPress={() => navigateToCreateEditTask()}
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
      </TasksListArea>

      <ModalContainer
        title="Filtrar"
        isVisible={modalIsOpen}
      >
        <Form>
          <Input
            label="Título"
            placeholder="Informe o títutlo"
          />

          <PeriodSelector
            optionSelected={periodType}
            onPressInLeftButton={() => setPeriodType(0)}
            onPressInRightButton={() => setPeriodType(1)}
          />

          <SelectInput
            wSize={periodType === 0 ? '110px' : '100%'}
            label={periodType === 0 ? 'Dia' : 'Dia da Semana'}
            selectedValue="1"
            onValueChange={() => {
              //
            }}
          />

          <Button
            name="Confirmar"
            color="lightBlue"
            wSize="80%"
            onPress={handleToggleModalIsOpen}
          />
        </Form>
      </ModalContainer>
    </Container>
  );
};

export default Home;
