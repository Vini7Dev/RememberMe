// Date provider
class DateProvider {
  // Parse Date format to "DD/MM/YYYY"
  public static parseDateFormat(date: Date): string {
    // Separate day, month and year
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    // Return formated string
    return `${day}/${month}/${year}`;
  }

  // Transform days array to presentation text
  public static transformDaysArrayToPresentationText(days: string[] | number[]): string {
    // Join array elements with comma separation
    const apresentation = days.join(', ');

    // Find last comma index
    const lastComma = apresentation.lastIndexOf(',');

    // Replace last comma to 'e' separator
    if (lastComma !== -1) {
      return `${apresentation.substring(0, lastComma)} e ${apresentation.substring(lastComma + 2)}`;
    }

    // Return presentation string
    return apresentation;
  }

  // Transform month days id array string to two zero position "00"
  public static parseDaysNumberToMonthDay(daysNumber: string[]): string[] {
    const daysParsed = daysNumber.map((day) => day.padStart(2, '0'));

    return daysParsed;
  }

  // Transform week days number array to name
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
