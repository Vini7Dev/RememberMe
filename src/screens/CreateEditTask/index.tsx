import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  TitleView,
  TitleText,
  Form,
  InputMargin,
  PeriodSelectorView,
  PeriodSelectedList,
  TimeLabel,
  TimeInputsContainer,
  TimeDivisionText,
  SubmitButtonView,
} from './styles';

import TasksRepository from '../../scripts/repositories/TasksRepository';
import DefaultDaysData, { IDayProps } from '../../scripts/utils/DefaultDaysData';
import FormValidation from '../../scripts/utils/FormValidation';

import Header from '../../components/Header';
import UpperWhiteBackground from '../../components/UpperWhiteBackground';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import PeriodSelector from '../../components/PeriodSelector';
import PeriodOptions from '../../components/PeriodOptions';
import TimeInput from '../../components/TimeInput';
import DayMarkupButton from '../../components/DayMarkupButton';
import Button from '../../components/Button';
import ModalContainer from '../../components/ModalContainer';
import Loading from '../../components/Loading';

// Route parameters
interface IRouteParams {
  id?: string;
}

// Screen component
const CreateEditTask: React.FC = () => {
  // Navigation and Route
  const navigation = useNavigation();
  const route = useRoute();

  // Screen states
  const [showLoading, setShowLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [periodType, setPeriodType] = useState(0);

  // Period selectors
  const [monthDays, setMonthDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultMonthDays);
  const [weekDays, setWeekDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultWeekDays);

  // Task data
  const [taskId, setTaskId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('06');
  const [minutes, setMinutes] = useState('00');

  // Show or hide modal
  const handleToggleModalIsOpen = useCallback(() => {
    // Toggle loading presentation
    setShowLoading(!showLoading);

    // Wait for presentation of loading
    setTimeout(() => setModalIsOpen(!modalIsOpen), 1);
  }, [showLoading, modalIsOpen]);

  // Toggle day markup
  const handleOnPressDayMarkupButton = useCallback((id: string) => {
    // Get month days or week days array
    const daysArray = periodType === 0 ? monthDays : weekDays;

    // Find selected day index
    const dayIndex = daysArray.findIndex((day) => day.id === id);

    // Toggle day checked value
    daysArray[dayIndex].checked = !daysArray[dayIndex].checked;

    // Update days array
    // eslint-disable-next-line no-unused-expressions
    periodType === 0
      ? setMonthDays(daysArray)
      : setWeekDays(daysArray);
  }, [periodType, monthDays, weekDays]);

  // On press button to submit form data
  const handleSubmitFormDate = useCallback(async () => {
    // Start period empty
    const period: string[] = [];

    // Add checked days in the period array
    // eslint-disable-next-line no-unused-expressions
    (periodType === 0
      ? monthDays.forEach((day) => {
        if (day.checked) period.push(day.id);
      })
      : weekDays.forEach((day) => {
        if (day.checked) period.push(day.id);
      }));

    // Validate form data
    const validationResponse = FormValidation.submitTaskDataFormValidation({
      title,
      hours,
      minutes,
      period,
    });

    // If validation return 'error'
    if (validationResponse.type === 'error') {
      // Show alert about error
      Alert.alert(
        validationResponse.error?.title || 'Informações incompletas!',
        validationResponse.error?.description || 'Reveja o formulário.',
      );

      // Cancel operation
      return;
    }

    // Display loading in screen
    setShowLoading(true);

    // If task id is present, update task
    if (taskId.length > 0) {
      // Updating task on storage
      await TasksRepository.updateTask({
        id: taskId,
        title,
        description,
        hours,
        minutes,
        periodType,
        period,
      });
    } else {
      // Saving task on storage
      await TasksRepository.saveTask({
        title,
        description,
        hours,
        minutes,
        periodType,
        period,
      });
    }

    // Stop loading
    setShowLoading(false);

    // Go back to Home screen
    navigation.reset({
      routes: [{ name: 'Home' }],
      index: 0,
    });
  }, [taskId, title, description, hours, minutes, periodType, monthDays, weekDays, navigation]);

  // Load task data to update
  const handleLoadTaskData = useCallback(async (id: string) => {
    // Start loading
    setShowLoading(true);

    // Saving tas id in state
    setTaskId(id);

    // Loading task data
    const taskData = await TasksRepository.findTaskById(id);

    // If tasks does not exists, cancel operation
    if (!taskData) {
      Alert.alert('A tarefa não foi encontrada!');

      // Stop loading
      setShowLoading(false);

      return;
    }

    // Saving task data on state
    const [taskHours, taskMinutes] = taskData.time.split(':');

    setTitle(taskData.title);
    setDescription(taskData.description);
    setHours(taskHours);
    setMinutes(taskMinutes);
    setPeriodType(taskData.periodType);
    // eslint-disable-next-line no-unused-expressions
    taskData.periodType === 0
      ? setMonthDays(DefaultDaysData.getCustomCheckedMonthDays(taskData.period))
      : setWeekDays(DefaultDaysData.getCustomCheckedWeekDays(taskData.period));

    // Stop loading
    setShowLoading(false);
  }, []);

  // Check that the task id is present in the route parameters to update the task
  useEffect(() => {
    const { id } = route.params as IRouteParams;

    if (!id) {
      return;
    }

    handleLoadTaskData(id);
  }, [route, handleLoadTaskData]);

  return (
    <Container>
      <Header />

      <UpperWhiteBackground>
        <TitleView>
          <TitleText>Adicionar Tarefa</TitleText>
        </TitleView>

        <Form>
          <InputMargin>
            <Input
              label="Título"
              placeholder="Informe o título da tarefa"
              defaultValue={title}
              onChangeText={(text) => setTitle(text)}
            />
          </InputMargin>
          <InputMargin>
            <TextArea
              label="Descrição"
              placeholder="Descreva a tarefa..."
              defaultValue={description}
              onChangeText={(text) => setDescription(text)}
            />
          </InputMargin>

          <PeriodSelectorView>
            <PeriodSelector
              optionSelected={periodType}
              onPressInLeftButton={() => setPeriodType(0)}
              onPressInRightButton={() => setPeriodType(1)}
            />

            <PeriodSelectedList
              periodType={periodType}
            >
              {
                periodType === 0
                  ? monthDays.map((day) => (
                    day.checked
                    && (
                    <DayMarkupButton
                      key={day.id}
                      id={day.id}
                      name={day.value}
                      checked
                      desableCheck
                      small
                    />
                    )
                  ))
                  : weekDays.map((day) => (
                    day.checked
                    && (
                    <DayMarkupButton
                      key={day.id}
                      id={day.id}
                      name={day.value}
                      checked
                      desableCheck
                    />
                    )
                  ))
              }
            </PeriodSelectedList>

            <Button
              name="Editar"
              color="blue"
              wSize="50%"
              icon="edit-3"
              onPress={handleToggleModalIsOpen}
            />
          </PeriodSelectorView>

          <InputMargin>
            <TimeLabel>
              Horário
            </TimeLabel>

            <TimeInputsContainer>
              <TimeInput
                type="hour"
                defaultValue={hours}
                value={hours}
                onChangeText={(text) => setHours(text)}
              />
              <TimeDivisionText>:</TimeDivisionText>
              <TimeInput
                type="minute"
                defaultValue={minutes}
                value={minutes}
                onChangeText={(text) => setMinutes(text)}
              />
            </TimeInputsContainer>
          </InputMargin>
        </Form>
      </UpperWhiteBackground>

      <SubmitButtonView>
        <Button
          name={
            taskId.length > 0
              ? 'Atualizar'
              : 'Salvar'
          }
          wSize="100%"
          color="blue"
          onPress={handleSubmitFormDate}
        />
      </SubmitButtonView>

      {
        showLoading && <Loading />
      }

      <ModalContainer
        title={periodType === 0 ? 'Selecione os Dias do Mês' : 'Selecione os Dias da Semana'}
        isVisible={modalIsOpen}
      >
        <PeriodOptions
          renderButtons={modalIsOpen}
          periodType={periodType}
          monthDays={monthDays}
          weekDays={weekDays}
          onPressDayMarkupButton={handleOnPressDayMarkupButton}
        />

        <Button
          name="Confirmar"
          color="lightBlue"
          wSize="80%"
          onPress={handleToggleModalIsOpen}
        />
      </ModalContainer>
    </Container>
  );
};

export default CreateEditTask;
