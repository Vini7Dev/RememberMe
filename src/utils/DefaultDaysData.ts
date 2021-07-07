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

// Default Days Data
class DefaultDaysData {
  // Get default data of month days
  public static getDefaultMonthDays(): IDayProps[] {
    const days = [];

    for (let i = 1; i <= 31; i++) {
      const iString = i.toString();
      days.push({
        id: iString,
        value: iString,
        checked: false,
      });
    }

    return days;
  }

  // Get default data of week days
  public static getDefaultWeekDays(): IDayProps[] {
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
}

export default DefaultDaysData;
