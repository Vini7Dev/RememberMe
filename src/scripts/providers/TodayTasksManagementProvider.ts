import { ITaskData } from '../repositories/TasksRepository';

// TodayTask data
export interface ITodayTask extends ITaskData {
  completed: boolean;
}

// Today Tasks Management
class TodayTasksManagementProvider {
  // Today tasks list
  private static todayTasksList: ITodayTask[] = [];

  // Find today task by id
  public static findById(id: string): ITodayTask | undefined {
    // Search task by id
    const findedTask = this.todayTasksList.find((task) => task.id === id);

    // Returning task finded
    return findedTask;
  }

  // Get only incomplete tasks
  public static getOnlyIncompletedTasks(): ITodayTask[] {
    // Filter incompleted tasks
    const incompetedTasks = this.todayTasksList.filter((task) => !task.completed);

    // Returning tasks filtered
    return incompetedTasks;
  }

  // Generate and save a new today tasks list
  public static generateTodayTasksList(tasks: ITaskData[]): ITodayTask[] {
    // Getting current date
    const thisDate = new Date();

    // Filter today task
    const filteredTodayTasks = tasks.filter((task) => {
      return (task.periodType === 0
        ? task.period.findIndex((day) => Number(day) === thisDate.getDate()) !== -1
        : task.period.findIndex((day) => Number(day) === thisDate.getDay()) !== -1);
    });

    // Generate today tasks list with "completed" attribute
    const todayTasksWithCompletedAttribute = filteredTodayTasks.map((task) => {
      const taskAlreadyOnVector = this.findById(task.id);

      return Object.assign(task, {
        completed: taskAlreadyOnVector ? taskAlreadyOnVector.completed : false,
      });
    });

    // Update tasks list saved
    this.todayTasksList = todayTasksWithCompletedAttribute;

    // Returning updated tasks list
    return this.todayTasksList;
  }

  // Mark today task as completed by id
  public static markTaskAsCompleted(id: string): ITodayTask[] | null {
    console.log(this.todayTasksList);

    // Getting task position on array
    const taskIndex = this.todayTasksList.findIndex((task) => task.id === id);

    // If task not exits, cancel the operation
    if (taskIndex === -1) {
      return null;
    }

    // Mark task completed
    this.todayTasksList[taskIndex].completed = true;

    console.log(this.todayTasksList);

    // Returning updated array
    return this.todayTasksList;
  }
}

export default TodayTasksManagementProvider;
