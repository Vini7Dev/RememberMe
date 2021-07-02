import React, { useState } from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';

import styles from './styles';
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
    <ScrollView style={styles.container}>
      <Header name="Vinícius" />

      <UpperWhiteBackground>
        <View style={styles.titleView}>
          <Text style={styles.title}>Adicionar Tarefa</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputMargin}>
            <Input
              label="Título"
              placeholder="Informe o título da tarefa"
            />
          </View>
          <View style={styles.inputMargin}>
            <TextArea
              label="Descrição"
              placeholder="Descreva a tarefa..."
            />
          </View>

          <View style={styles.periodSelectorView}>
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
          </View>

          <View style={styles.inputMargin}>
            <Text style={styles.timeLabel}>
              Horário
            </Text>

            <View style={styles.timeInputsContainer}>
              <TimeInput />
              <Text style={styles.timeDivisionText}>:</Text>
              <TimeInput />
            </View>
          </View>
        </View>
      </UpperWhiteBackground>

      <View style={styles.submitButtonView}>
        <Button
          name="Salvar"
          wSize="100%"
          color="blue"
        />
      </View>

      <ModalContainer
        title="Modal"
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
    </ScrollView>
  );
};

export default CreateEditTask;
