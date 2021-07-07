class DateProvider {
  public static parseDateFormat(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  public static transformDaysArrayToPresentationText(days: string[] | number[]): string {
    const apresentation = days.join(', ');

    const lastComma = apresentation.lastIndexOf(',');

    if (lastComma !== -1) {
      return `${apresentation.substring(0, lastComma)} e ${apresentation.substring(lastComma + 2)}`;
    }

    return apresentation;
  }

  public static parseDaysNumberToMonthDay(daysNumber: string[]): string[] {
    const daysParsed = daysNumber.map((day) => day.padStart(2, '0'));

    return daysParsed;
  }

  public static parseDaysNumberToWeekDay(daysNumber: string[]): string[] {
    const daysParsed = daysNumber.map((day) => {
      switch (day) {
        case '0':
          return 'Domingo';
        case '1':
          return 'Segunda';
        case '2':
          return 'Terça';
        case '3':
          return 'Quarta';
        case '4':
          return 'Quinta';
        case '5':
          return 'Sexta';
        case '6':
          return 'Sábado';
        default:
          return 'Data inválida';
      }
    });

    return daysParsed;
  }
}

export default DateProvider;
