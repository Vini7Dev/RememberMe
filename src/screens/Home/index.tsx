import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_TASKS } from '../../global/configs/storage';
import ITaskData from '../../models/ITaskData';
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
  InputMargin,
} from './styles';

import TodayTask from '../../components/TodayTask';
import TaskItem from '../../components/TaskItem';
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

// Screen component
const Home: React.FC = () => {
  // Screen states
  const navigation = useNavigation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('DD/MM/YYYY');

  // Period selectors
  const [todayTasks, setTodayTasks] = useState<ITaskData[]>([]);
  const [allTasks, setAllTasks] = useState<ITaskData[]>([]);

  // Modal filter states
  const [periodType, setPeriodType] = useState(0);
  const [optionItems, setOptionItems] = useState<IPickerItemProps[]>([]);
  const [dayFilterSelected, setDayFilterSelected] = useState('');

  // Getting picker items list
  const handleLoadPickerItems = useCallback(() => {
    // Get month days or week days default properties
    const daysData = periodType === 0
      ? DefaultDaysData.getDefaultMonthDays()
      : DefaultDaysData.getDefaultWeekDays();

    // Generate items object
    const items = daysData.map((data) => ({
      label: periodType === 0
        ? data.value.padStart(2, '0')
        : data.value,
      value: data.id,
    }));

    // Update option items value
    setOptionItems(items);
    setDayFilterSelected(items[0].value);
  }, [periodType]);

  // Navigate to CreateEditTask screen
  const navigateToCreateEditTask = useCallback((id?: string) => {
    navigation.navigate('CreateEditTask', { id });
  }, [navigation]);

  // Toggle modal open
  const handleToggleModalIsOpen = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  // Load tasks saved from storage
  const handleLoadTasksFromStorage = useCallback(async () => {
    // Load tasks
    const loadedTasks = await AsyncStorage.getItem(COLLECTION_TASKS);

    // If not exists tasks saved, cancel operation
    if (!loadedTasks) {
      return;
    }

    // Parse tasks string to object
    const parsedTasks = JSON.parse(loadedTasks) as ITaskData[];

    // Format tasks to apresentation
    const formatedTasksPresentation = parsedTasks.map((task) => {
      const formatedTask = task;

      const taskPeriodNumbersParsed = task.periodType === 0
        ? DateProvider.parseDaysNumberToMonthDay(task.period)
        : DateProvider.parseDaysNumberToWeekDay(task.period);

      // Format period array to string
      formatedTask.periodPresentation = DateProvider.transformDaysArrayToPresentationText(
        taskPeriodNumbersParsed,
      );

      // If task description is empty, set as '...'
      if (!task.description) formatedTask.description = '...';

      // Return formated task
      return formatedTask;
    });

    // Getting current date
    const thisDate = new Date();

    // Filter today task
    const filteredTasks = formatedTasksPresentation.filter((task) => {
      return (task.periodType === 0
        ? task.period.findIndex((day) => Number(day) === thisDate.getDate()) !== -1
        : task.period.findIndex((day) => Number(day) === thisDate.getDay()) !== -1);
    });

    // Update all tasks and today tasks state
    setAllTasks(formatedTasksPresentation);
    setTodayTasks(filteredTasks);
  }, []);

  // Load tasks from storage on start
  useEffect(() => {
    handleLoadTasksFromStorage();
  }, []);

  // Set screen states
  useEffect(() => {
    // Format date value to DD/MM/YYYY string
    const dateFormated = DateProvider.parseDateFormat(new Date());

    // Save day formated
    setCurrentDate(dateFormated);

    // Load picker items data
    handleLoadPickerItems();
  }, [handleLoadPickerItems]);

  return (
    <Container>
      <Header />

      <UpperWhiteBackground>
        <TitleView>
          <TitleText>Tarefas do Dia</TitleText>
          <SubtitleText>{currentDate}</SubtitleText>
        </TitleView>

        {
          // Render today tasks list
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
          // Render all tasks list
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
                    period={item.periodPresentation as string}
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
          <InputMargin>
            <Input
              label="Título"
              placeholder="Informe o títutlo"
            />
          </InputMargin>

          <InputMargin>
            <PeriodSelector
              optionSelected={periodType}
              onPressInLeftButton={() => setPeriodType(0)}
              onPressInRightButton={() => setPeriodType(1)}
            />
          </InputMargin>

          <InputMargin>
            <SelectInput
              wSize={periodType === 0 ? '110px' : '100%'}
              label={periodType === 0 ? 'Dia' : 'Dia da Semana'}
              items={optionItems}
              selectedValue={dayFilterSelected}
              onValueChange={(value: string) => setDayFilterSelected(value)}
            />
          </InputMargin>

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
