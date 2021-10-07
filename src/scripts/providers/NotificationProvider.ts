import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import { NotificationSchedulerModule } from 'expo-notifications/build/NotificationScheduler.types';

interface ITaskNotificationProps {
  title: string;
  body: string;
  data: {
    task_id: string;
  }
}

class NotificationProvider {
  private static expoPushToken: string | undefined;

  private static notification: Notifications.Notification = {} as Notifications.Notification;

  private static sendNotificationListener:
    NotificationSchedulerModule = {} as NotificationSchedulerModule;

  private static clickNorificationListener:
    NotificationSchedulerModule = {} as NotificationSchedulerModule;

  // Starting notifications configuration
  public static async startNotificationsConfigs(): Promise<any> {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    this.registerForPushNotificationsAsync().then((token) => {
      this.expoPushToken = token;
    });

    this.sendNotificationListener.current = Notifications
      .addNotificationReceivedListener((notificationData) => {
        this.notification = notificationData;
      });

    this.clickNorificationListener.current = Notifications
      .addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(this.sendNotificationListener.current);
      Notifications.removeNotificationSubscription(this.clickNorificationListener.current);
    };
  }

  // Registration of push notifications
  private static async registerForPushNotificationsAsync(): Promise<string | undefined> {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        console.log('Failed to get push token for push notification!');
        return;
      }

      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      console.log('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    // eslint-disable-next-line consistent-return
    return token;
  }

  // Send a new task notification
  public static async sendTaskNotification({
    title,
    body,
    data: {
      task_id,
    },
  }: ITaskNotificationProps): Promise<void> {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: {
          task_id,
        },
      },
      trigger: { seconds: 2 },
    });
  }
}

export default NotificationProvider;
