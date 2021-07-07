// Create task properties
interface ICreateTaskDTO {
  title: string;
  description: string;
  hours: string;
  minutes: string;
  periodType: number;
  period: string[];
}

export default ICreateTaskDTO;
