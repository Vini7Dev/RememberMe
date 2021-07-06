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

const CreateEditTask: React.FC = () => {
  const navigation = useNavigation();

  const [showLoading, setShowLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [periodType, setPeriodType] = useState(0);

  const [monthDays, setMonthDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultMonthDays);
  const [weekDays, setWeekDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultWeekDays);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('06');
  const [minutes, setMinutes] = useState('00');

  const handleToggleModalIsOpen = useCallback(() => {
    setShowLoading(!showLoading);

    setTimeout(() => setModalIsOpen(!modalIsOpen), 0.01);
  }, [showLoading, modalIsOpen]);

  const handleOnPressDayMarkupButton = useCallback((id: string) => {
    const daysArray = periodType === 0 ? monthDays : weekDays;

    const dayIndex = daysArray.findIndex((day) => day.id === id);

    daysArray[dayIndex].checked = !daysArray[dayIndex].checked;

    // eslint-disable-next-line no-unused-expressions
    periodType === 0
      ? setMonthDays(daysArray)
      : setWeekDays(daysArray);
  }, [periodType, monthDays, weekDays]);

  const handleSubmitFormDate = useCallback(async () => {
    const period: string[] = [];

    // eslint-disable-next-line no-unused-expressions
    (periodType === 0
      ? monthDays.forEach((day) => {
        if (day.checked) period.push(day.id);
      })
      : weekDays.forEach((day) => {
        if (day.checked) period.push(day.id);
      }));

    const validationResponse = FormValidation.submitTaskDataFormValidation({
      title,
      hours,
      minutes,
      period,
    });

    if (validationResponse.type === 'error') {
      Alert.alert(
        validationResponse.error?.title || 'Informações incompletas!',
        validationResponse.error?.description || 'Reveja o formulário.',
      );

      return;
    }

    setShowLoading(true);

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

    let newTasksList = [];

    const storageTasks = await AsyncStorage.getItem(COLLECTION_TASKS);

    if (storageTasks) {
      newTasksList = JSON.parse(storageTasks);
    }

    newTasksList.push((taskData));

    await AsyncStorage.setItem(COLLECTION_TASKS, JSON.stringify(newTasksList));

    setShowLoading(false);

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
