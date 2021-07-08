import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { COLLECTION_TASKS } from '../../global/configs/storage';

import ICreateTaskDTO from '../dtos/ICreateTaskDTO';

// Task properties
export interface ITaskData {
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

// Task repository
class TasksRepository {
  // Find task by id
  public static async findTaskById(id: string): Promise<ITaskData | undefined> {
    // Get tasks from storage
    const storageTasks = await AsyncStorage.getItem(COLLECTION_TASKS);

    // If not exists tasks in storage, cancel operation
    if (!storageTasks) {
      return undefined;
    }

    const parsedTasks = JSON.parse(storageTasks) as ITaskData[];

    return parsedTasks.find((task) => task.id === id);
  }

  // Get all tasks from storage
  public static async listTasks(): Promise<ITaskData[]> {
    // Get tasks from storage
    const storageTasks = await AsyncStorage.getItem(COLLECTION_TASKS);

    // If there are tasks in storage, return them
    if (storageTasks) {
      return JSON.parse(storageTasks);
    }

    // If not exist tasks saved in storage, return empty array
    return [];
  }

  // Save task in storage
  public static async saveTask({
    title,
    description,
    hours,
    minutes,
    periodType,
    period,
  }: ICreateTaskDTO): Promise<ITaskData> {
    // Create task object with form data
    const taskData = {
      id: uuid.v4() as string,
      title,
      description,
      time: `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`,
      periodType,
      period,
      created_at: new Date(),
      updated_at: new Date(),
    };

    // Start tasks list empty
    let newTasksList = [];

    // Get tasks from storage
    const storageTasks = await AsyncStorage.getItem(COLLECTION_TASKS);

    // If exists tasks in storage
    if (storageTasks) {
      // Set saved tasks into list
      newTasksList = JSON.parse(storageTasks);
    }

    // Add new task in tasks list
    newTasksList.push((taskData));

    // Save new tasks list in storage
    await AsyncStorage.setItem(COLLECTION_TASKS, JSON.stringify(newTasksList));

    // Returning task saved
    return taskData;
  }

  public static async deleteTask(id: string): Promise<void> {
    // Get tasks from storage
    const tasksList = await this.listTasks();

    // If not exists tasks saved, cancel operation
    if (!tasksList) {
      return;
    }

    // Find index of task to delete
    const taskIndex = tasksList.findIndex((task) => task.id === id);

    // Removing task from array
    tasksList.splice(taskIndex, 1);

    // Saving a new array of tasks in storage
    await AsyncStorage.setItem(COLLECTION_TASKS, JSON.stringify(tasksList));
  }
}

export default TasksRepository;
