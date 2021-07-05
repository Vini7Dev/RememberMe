import React, { useState, useCallback } from 'react';

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
  const [showLoading, setShowLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [periodType, setPeriodType] = useState(0);

  const [monthDays, setMonthDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultMonthDays);
  const [weekDays, setWeekDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultWeekDays);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('00');
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

    const taskData = {
      title,
      description,
      time: `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`,
      periodType,
      period,
    };

    console.log(taskData);
  }, [title, description, hours, minutes, periodType, monthDays, weekDays]);

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
              <TimeInput onChangeText={(text) => setHours(text)} />
              <TimeDivisionText>:</TimeDivisionText>
              <TimeInput onChangeText={(text) => setMinutes(text)} />
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
