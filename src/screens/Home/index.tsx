import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TasksRepository, { ITaskData } from '../../scripts/repositories/TasksRepository';
import TodayTasksManagementProvider, { ITodayTask } from '../../scripts/providers/TodayTasksManagementProvider';
import DateProvider from '../../scripts/providers/DateProvider';
import DefaultDaysData from '../../scripts/utils/DefaultDaysData';

import {
  Container,
  TitleView,
  TitleText,
  SubtitleText,
  TasksListArea,
  TasksListTitleView,
  TasksListTitleText,
  FilterButtonView,
  FiltersOnAlert,
  Form,
  InputMargin,
} from './styles';

import NotificationProvider from '../../scripts/providers/NotificationProvider';

import Loading from '../../components/Loading';
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

// Screen component
const Home: React.FC = () => {
  // Screen states
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('DD/MM/YYYY');

  // Tasks
  const [todayTasks, setTodayTasks] = useState<ITodayTask[]>([]);
  const [allTasks, setAllTasks] = useState<ITaskData[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<ITaskData[]>([]);

  // Modal filter states
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterPeriodType, setFilterPeriodType] = useState(-1);
  const [optionItems, setOptionItems] = useState<IPickerItemProps[]>([]);
  const [dayFilterSelected, setDayFilterSelected] = useState('');

  // On click in task notification, navigate to task data
  const onClickInNotification = useCallback((id: string) => {
    navigation.navigate('CreateEditTask', { id });
  }, [navigation]);

  // Starting notifications configuration on load app
  useEffect(() => {
    const startNotificationsConfigs = async () => {
      // Verify if push notification is already configured
      if (NotificationProvider.getExpoPushToken()) {
        return;
      }

      await NotificationProvider.startNotificationsConfigs(onClickInNotification);
    };

    startNotificationsConfigs();
  }, [onClickInNotification]);

  // Navigate to CreateEditTask screen
  const navigateToCreateEditTask = useCallback((id?: string) => {
    navigation.navigate('CreateEditTask', { id });
  }, [navigation]);

  // Toggle modal open
  const handleToggleModalIsOpen = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  // Getting picker items list
  const handleLoadPickerItems = useCallback(() => {
    // Get month days or week days default properties
    const daysData = filterPeriodType === 0
      ? DefaultDaysData.getDefaultMonthDays()
      : DefaultDaysData.getDefaultWeekDays();

    // Generate items object
    const items = daysData.map((data) => ({
      label: filterPeriodType === 0
        ? data.value.padStart(2, '0')
        : data.value,
      value: data.id,
    }));

    // Update option items value
    setOptionItems(items);
    setDayFilterSelected(items[0].value);
  }, [filterPeriodType]);

  // Mark today's task as completed
  const handleMarkTodayTask = useCallback((id: string) => {
    // Mark task and recover the updated array
    TodayTasksManagementProvider.markTaskAsCompleted(id);

    // Getting only incompleted tasks
    const updateTodayTasksArray = TodayTasksManagementProvider.getOnlyIncompletedTasks();

    // If not occurred an error, update the today tasks array state
    if (updateTodayTasksArray) {
      setTodayTasks(updateTodayTasksArray);
    }
  }, []);

  // Apply filters
  const handleApplyFilters = useCallback(() => {
    // Starting filter with all tasks
    let filtered = allTasks;

    // Filter by title
    if (filterTitle.length > 0) {
      filtered = filtered.filter((task) => {
        const taskTitleLowerCase = task.title.toLowerCase().trim();
        const filterTitleLowerCase = filterTitle.toLocaleLowerCase().trim();

        return taskTitleLowerCase.includes(filterTitleLowerCase);
      });

      // Mark the filtered state
      setIsFiltered(true);
    }

    // Filter by day
    if (filterPeriodType !== -1) {
      filtered = filtered.filter((task) => (
        task.periodType === filterPeriodType
        && task.period.findIndex((item) => item === dayFilterSelected) !== -1
      ));

      // Mark the filtered state
      setIsFiltered(true);
    }

    // If there are no filters applied, uncheck the filtered state
    if (filtered === allTasks) {
      setIsFiltered(false);
    }

    // Save filtered tasks state
    setFilteredTasks(filtered);

    // Close modal
    handleToggleModalIsOpen();
  }, [allTasks, dayFilterSelected, filterTitle, filterPeriodType, handleToggleModalIsOpen]);

  // Load tasks saved from storage
  const handleLoadTasksFromStorage = useCallback(async () => {
    // Start loading
    setIsLoading(true);

    // Load tasks
    const loadedTasks = await TasksRepository.listTasks();

    // If not exists tasks saved, cancel operation
    if (loadedTasks.length === 0) {
      // Stop loading
      setIsLoading(false);

      return;
    }

    // Format tasks to apresentation
    const formatedTasksPresentation = loadedTasks.map((task) => {
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

    // Generating today tasks list
    TodayTasksManagementProvider.generateTodayTasksList(formatedTasksPresentation);

    // Getting incompleted tasks
    const todayTaskList = TodayTasksManagementProvider.getOnlyIncompletedTasks();

    // Update all tasks and today tasks state
    setAllTasks(formatedTasksPresentation);
    setFilteredTasks(formatedTasksPresentation);
    setTodayTasks(todayTaskList);

    // Stop loading
    setIsLoading(false);
  }, []);

  // Delete task when user confirm this action
  const handleDeleteSelectedTask = useCallback(async (id: string) => {
    // Start loading
    setIsLoading(true);

    // Deleting task from storage
    await TasksRepository.deleteTask(id);

    // Reload tasks items
    handleLoadTasksFromStorage();
  }, [handleLoadTasksFromStorage]);

  // Ask the user if he really wants to delete the task
  const handleQuestionToDeleteTask = useCallback(async (id: string) => {
    // Send question alert
    Alert.alert(
      'Deseja apagar a tarefa?',
      'Esta ação não pode ser desfeita!',
      [
        {
          text: 'Sim',
          onPress: () => handleDeleteSelectedTask(id),
        },
        { text: 'Não' },
      ],
    );
  }, [handleDeleteSelectedTask]);

  // Load tasks from storage on start
  useEffect(() => {
    handleLoadTasksFromStorage();
  }, [handleLoadTasksFromStorage]);

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
    <>
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
                    onPressToMarkCompleted={handleMarkTodayTask}
                    onPressToUpdate={navigateToCreateEditTask}
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

          {isFiltered && (
            <FiltersOnAlert>
              Filtros ativos!
            </FiltersOnAlert>
          )}

          {
          // Render all filtered tasks list
          filteredTasks.length === 0
            ? <EmptyListAlert />
            : (
              <FlatList
                style={{ marginTop: 10, flexGrow: 0 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 20 }}
                data={filteredTasks}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) => (
                  <TaskItem
                    id={item.id}
                    title={item.title}
                    time={item.time}
                    period={item.periodPresentation as string}
                    description={item.description}
                    onPressToDelete={(id) => handleQuestionToDeleteTask(id)}
                    onPressToUpdate={(id) => navigateToCreateEditTask(id)}
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
                onChangeText={(text) => setFilterTitle(text)}
              />
            </InputMargin>

            <InputMargin>
              <PeriodSelector
                optionSelected={filterPeriodType}
                onPressInLeftButton={() => (
                  filterPeriodType === 0
                    ? setFilterPeriodType(-1)
                    : setFilterPeriodType(0)
                )}
                onPressInRightButton={() => (
                  filterPeriodType === 1
                    ? setFilterPeriodType(-1)
                    : setFilterPeriodType(1)
                )}
              />
            </InputMargin>

            {
              filterPeriodType !== -1
              && (
                <InputMargin>
                  <SelectInput
                    wSize={filterPeriodType === 0 ? '110px' : '100%'}
                    label={filterPeriodType === 0 ? 'Dia' : 'Dia da Semana'}
                    items={optionItems}
                    selectedValue={dayFilterSelected}
                    onValueChange={(value: string) => setDayFilterSelected(value)}
                  />
                </InputMargin>
              )
            }

            <Button
              name="Confirmar"
              color="lightBlue"
              wSize="80%"
              onPress={handleApplyFilters}
            />
          </Form>
        </ModalContainer>
      </Container>

      {
        isLoading && <Loading />
      }
    </>
  );
};

export default Home;
