// Day properties
export interface IDayProps {
  id: string;
  value: string;
  checked: boolean;
}

// Day option items properties
export interface IDayOptionItemProps {
  id: string;
  value: string;
  checked: boolean;
}

// Default days data
class DefaultDaysData {
  // Get default data of month days
  public static getDefaultMonthDays(): IDayProps[] {
    // Month days, starting empty
    const days = [];

    // Generating a new object with default values for each month day
    for (let i = 1; i <= 31; i++) {
      const iString = i.toString();
      days.push({
        id: iString,
        value: iString,
        checked: false,
      });
    }

    // Returning array
    return days;
  }

  // Get default data of week days
  public static getDefaultWeekDays(): IDayProps[] {
    // Returning a new array with default data for each week day
    return [
      { id: '0', value: 'Domingo', checked: false },
      { id: '1', value: 'Segunda-feira', checked: false },
      { id: '2', value: 'Terça-feira', checked: false },
      { id: '3', value: 'Quarta-feira', checked: false },
      { id: '4', value: 'Quinta-feira', checked: false },
      { id: '5', value: 'Sexta-feira', checked: false },
      { id: '6', value: 'Sábado', checked: false },
    ];
  }

  // Generate a custom checked month days
  public static getCustomCheckedMonthDays(days: string[]): IDayProps[] {
    const defaultWeekDays = this.getDefaultMonthDays();

    const customArray = defaultWeekDays.map((day) => {
      if (days.findIndex((item) => item === day.id) !== -1) {
        day.checked = true;
      }

      return day;
    });

    return customArray;
  }

  // Generate a custom checked week days
  public static getCustomCheckedWeekDays(days: string[]): IDayProps[] {
    const defaultWeekDays = this.getDefaultWeekDays();

    const customArray = defaultWeekDays.map((day) => {
      if (days.findIndex((item) => item === day.id) !== -1) {
        day.checked = true;
      }

      return day;
    });

    return customArray;
  }
}

export default DefaultDaysData;
