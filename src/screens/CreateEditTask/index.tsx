import React, { useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

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
  LoadingView,
} from './styles';

import DefaultDaysData, { IDayProps } from '../../utils/DefaultDaysData';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import UpperWhiteBackground from '../../components/UpperWhiteBackground';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import PeriodSelector from '../../components/PeriodSelector';
import PeriodOptions from '../../components/PeriodOptions';
import TimeInput from '../../components/TimeInput';
import Button from '../../components/Button';
import ModalContainer from '../../components/ModalContainer';

const { baby_blue90 } = theme.colors;

const CreateEditTask: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [periodType, setPeriodType] = useState(0);

  const [monthDays, setMonthDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultMonthDays);
  const [weekDays, setWeekDays] = useState<IDayProps[]>(DefaultDaysData.getDefaultWeekDays);

  const handleToggleModalIsOpen = useCallback(() => {
    setShowLoading(!showLoading);

    setTimeout(() => setModalIsOpen(!modalIsOpen), 0.01);
  }, [showLoading, modalIsOpen]);

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
            />
          </InputMargin>
          <InputMargin>
            <TextArea
              label="Descrição"
              placeholder="Descreva a tarefa..."
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
              <TimeInput />
              <TimeDivisionText>:</TimeDivisionText>
              <TimeInput />
            </TimeInputsContainer>
          </InputMargin>
        </Form>
      </UpperWhiteBackground>

      <SubmitButtonView>
        <Button
          name="Salvar"
          wSize="100%"
          color="blue"
        />
      </SubmitButtonView>

      {
        showLoading && (
          <LoadingView>
            <ActivityIndicator color={baby_blue90} size="large" />
          </LoadingView>
        )
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
