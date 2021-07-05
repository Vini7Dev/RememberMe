import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DateProvider from '../../utils/DateProvider';

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
import EmptyListAlert from '../../components/EmptyListAlert';
import Header from '../../components/Header';
import UpperWhiteBackground from '../../components/UpperWhiteBackground';
import CircleButton from '../../components/CircleButton';
import Input from '../../components/Input';
import PeriodSelector from '../../components/PeriodSelector';
import SelectInput, { IPickerItemProps } from '../../components/SelectInput';
import Button from '../../components/Button';
import ModalContainer from '../../components/ModalContainer';
import DefaultDaysData from '../../utils/DefaultDaysData';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('DD/MM/YYYY');

  const [todayTasks, setTodayTasks] = useState<ITodayTaskProps[]>(tasksExample);
  const [allTasks, setAllTasks] = useState<ITaskItemProps[]>(tasksExample);

  const [periodType, setPeriodType] = useState(0);
  const [optionItems, setOptionItems] = useState<IPickerItemProps[]>([]);

  const handleLoadPickerItems = useCallback(() => {
    const daysData = periodType === 0
      ? DefaultDaysData.getDefaultMonthDays()
      : DefaultDaysData.getDefaultWeekDays();

    const items = daysData.map((data) => ({
      label: data.value,
      value: data.id,
    }));

    setOptionItems(items);
  }, [periodType]);

  useEffect(() => {
    const dateFormated = DateProvider.parseDateFormat(new Date());

    setCurrentDate(dateFormated);

    handleLoadPickerItems();
  }, [handleLoadPickerItems]);

  const navigateToCreateEditTask = useCallback((id?: string) => {
    navigation.navigate('CreateEditTask', { id });
  }, [navigation]);

  const handleToggleModalIsOpen = useCallback(() => {
    setModalIsOpen(!modalIsOpen);

    handleLoadPickerItems();
  }, [modalIsOpen, handleLoadPickerItems]);

  return (
    <Container>
      <Header />

      <UpperWhiteBackground>
        <TitleView>
          <TitleText>Tarefas do Dia</TitleText>
          <SubtitleText>{currentDate}</SubtitleText>
        </TitleView>

        {
          todayTasks.length === 0
            ? <EmptyListAlert />

            : (
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
            )
        }
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

        {
          allTasks.length === 0
            ? <EmptyListAlert />
            : (
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
            )
        }
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
            selectedValue={optionItems.length > 0 ? optionItems[0].value : ''}
            items={optionItems}
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
