import React, { useState } from 'react';

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

import Header from '../../components/Header';
import UpperWhiteBackground from '../../components/UpperWhiteBackground';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import PeriodSelector from '../../components/PeriodSelector';
import TimeInput from '../../components/TimeInput';
import Button from '../../components/Button';
import MarkupButton from '../../components/MarkupButton';
import ModalContainer from '../../components/ModalContainer';

const CreateEditTask: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState(0);

  return (
    <Container>
      <Header name="Vinícius" />

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
              optionSelected={optionSelected}
              onPressInLeftButton={() => setOptionSelected(0)}
              onPressInRightButton={() => setOptionSelected(1)}
            />

            <Button
              name="Editar"
              color="blue"
              wSize="50%"
              icon="edit-3"
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

      <ModalContainer
        title="Modal"
        visible={false}
      >
        <MarkupButton
          id="0"
          name="Domingo"
          checked
          handleAlternatingChecks={() => {
            //
          }}
        />
        <MarkupButton
          id="1"
          name="Segunda-feira"
          checked={false}
          handleAlternatingChecks={() => {
            //
          }}
        />
      </ModalContainer>
    </Container>
  );
};

export default CreateEditTask;
