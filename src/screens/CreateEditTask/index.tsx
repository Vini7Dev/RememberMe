import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { COLLECTION_TASKS } from '../../global/configs/storage';
import {
  Container,
  TitleView,
  TitleText,
  Form,
  InputMargin,
  PeriodSelectorView,
  TimeLabel,
  TimeInputsContainer,
  TimeDivisionText,
  SubmitButtonView,
} from './styles';

import DefaultDaysData, { IDayProps } from '../../utils/DefaultDaysData';
import FormValidation from '../../utils/FormValidation';

import Header from '../../components/Header';
import UpperWhiteBackground from '../../components/UpperWhiteBackground';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import PeriodSelector from '../../components/PeriodSelector';
import PeriodOptions from '../../components/PeriodOptions';
import TimeInput from '../../components/TimeInput';
import Button from '../../components/Button';
import ModalContainer from '../../components/ModalContainer';
import Loading from '../../components/Loading';

// Screen component
const CreateEditTask: React.FC = () => {
  // Navigation
  const navigation = useNavigation();

  // Screen states
  const [showLoading, setShowLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [periodType, setPeriodType] = useState(0);

  // Period selectors
  const [monthDays, setMonthDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultMonthDays);
  const [weekDays, setWeekDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultWeekDays);

  // Task data
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

    // Create task object with form data
    const taskData = {
      id: uuid.v4(),
      title,
      description,
      time: `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`,
      periodType,
      period,
      created_at: new Date(),
      updated_at: new Date(),
    };

    // Start tasks list empty
    let newTasksList = [];

    // Get tasks from storage
    const storageTasks = await AsyncStorage.getItem(COLLECTION_TASKS);

    // If exists tasks in storage
    if (storageTasks) {
      // Set saved tasks into list
      newTasksList = JSON.parse(storageTasks);
    }

    // Add new task in tasks list
    newTasksList.push((taskData));

    // Save new tasks list in storage
    await AsyncStorage.setItem(COLLECTION_TASKS, JSON.stringify(newTasksList));

    // Stop loading
    setShowLoading(false);

    // Go back to Home screen
    navigation.reset({
      routes: [{ name: 'Home' }],
      index: 0,
    });
  }, [title, description, hours, minutes, periodType, monthDays, weekDays, navigation]);

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
              onChangeText={(text) => setTitle(text)}
            />
          </InputMargin>
          <InputMargin>
            <TextArea
              label="Descrição"
              placeholder="Descreva a tarefa..."
              onChangeText={(text) => setDescription(text)}
            />
          </InputMargin>

          <PeriodSelectorView>
            <PeriodSelector
              optionSelected={periodType}
              onPressInLeftButton={() => setPeriodType(0)}
              onPressInRightButton={() => setPeriodType(1)}
            />

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
          name="Salvar"
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
