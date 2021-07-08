// Create task properties
interface ICreateTaskDTO {
  id: string;
  title: string;
  description: string;
  hours: string;
  minutes: string;
  periodType: number;
  period: string[];
}

export default ICreateTaskDTO;
