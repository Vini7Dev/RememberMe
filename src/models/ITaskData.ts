// Task properties
interface ITaskData {
  id: string;
  title: string;
  description: string;
  time: string;
  periodType: number;
  period: string[];
  periodPresentation?: string;
  created_at: Date;
  updated_at: Date;
}

export default ITaskData;
