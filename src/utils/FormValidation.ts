interface ITaskDataFormProps {
  title: string;
  hours: string;
  minutes: string;
  period: string[];
}

interface IResponseProps {
  type: 'error' | 'success';
  error?: {
    title: string;
    description: string;
  }
}

class FormValidation {
  public static submitTaskDataFormValidation({
    title,
    hours,
    minutes,
    period,
  }: ITaskDataFormProps): IResponseProps {
    if (title.length === 0) {
      return {
        type: 'error',
        error: {
          title: 'Título vazio!',
          description: 'Informe um título para a tarefa.',
        },
      };
    }

    if (period.length === 0) {
      return {
        type: 'error',
        error: {
          title: 'Você não selecionou o período de repetição!',
          description: 'Escolha entre "Dia do Mês" ou "Dia da Semana" e selecione os dias de repetição do alerta.',
        },
      };
    }

    if (hours.length === 0 || minutes.length === 0) {
      return {
        type: 'error',
        error: {
          title: 'Horário inválido!',
          description: 'Preencha o horário com a hora e os minutos de quando devo te alertar sobre a tarefa.',
        },
      };
    }

    return {
      type: 'success',
    };
  }

  public static timeInputValidation(inputType: 'hour' | 'minute', text: string): IResponseProps {
    const time = Number(text);

    if (inputType === 'hour') {
      if (time > 12 || time < 0) {
        return {
          type: 'error',
        };
      }
    } else if (time > 59 || time < 0) {
      return {
        type: 'error',
      };
    }

    return {
      type: 'success',
    };
  }
}

export default FormValidation;
