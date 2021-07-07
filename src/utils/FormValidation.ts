// Task data form properties
interface ITaskDataFormProps {
  title: string;
  hours: string;
  minutes: string;
  period: string[];
}

// Validation response properties
interface IResponseProps {
  type: 'error' | 'success';
  error?: {
    title: string;
    description: string;
  }
}

// Form validation
class FormValidation {
  // Create of update task form validation
  public static submitTaskDataFormValidation({
    title,
    hours,
    minutes,
    period,
  }: ITaskDataFormProps): IResponseProps {
    // Check if user has inform task title
    if (title.length === 0) {
      return {
        type: 'error',
        error: {
          title: 'Título vazio!',
          description: 'Informe um título para a tarefa.',
        },
      };
    }

    // Check if user has selected a repetition period
    if (period.length === 0) {
      return {
        type: 'error',
        error: {
          title: 'Você não selecionou o período de repetição!',
          description: 'Escolha entre "Dia do Mês" ou "Dia da Semana" e selecione os dias de repetição do alerta.',
        },
      };
    }

    // Check that the user has entered the hour and minutes to send task alert
    if (hours.length === 0 || minutes.length === 0) {
      return {
        type: 'error',
        error: {
          title: 'Horário inválido!',
          description: 'Preencha o horário com a hora e os minutos de quando devo te alertar sobre a tarefa.',
        },
      };
    }

    // It is alright, send success message
    return {
      type: 'success',
    };
  }

  // Check if time input value is valid
  public static timeInputValidation(inputType: 'hour' | 'minute', text: string): IResponseProps {
    // Parse input value to number
    const time = Number(text);

    if (inputType === 'hour') {
      // If input type is "hour", the value is more then 23 or minus then 0, send an error
      if (time > 23 || time < 0) {
        return {
          type: 'error',
        };
      }
    } else if (time > 59 || time < 0) {
      // If input type is "minute", the value is more then 59 or minus then 0, send an error
      return {
        type: 'error',
      };
    }

    // It is alright, send success message
    return {
      type: 'success',
    };
  }
}

export default FormValidation;
