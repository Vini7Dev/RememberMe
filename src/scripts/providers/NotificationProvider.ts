import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

interface ITaskNotificationProps {
  title: string;
  body: string;
  data: {
    task_id: string;
  }
}

class NotificationProvider {
  // Push notifications token
  private static expoPushToken: string | undefined;

  // Starting notifications configuration
  public static async startNotificationsConfigs(
    onClickInNotificationCallBack: (task_id: string) => void,
  ): Promise<() => void> {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    this.expoPushToken = await this.registerForPushNotificationsAsync();

    const clickNorificationListener = Notifications
      .addNotificationResponseReceivedListener((taskData) => {
        const { task_id } = taskData.notification.request.content.data;

        onClickInNotificationCallBack(task_id as string);
      });

    return () => {
      Notifications.removeNotificationSubscription(clickNorificationListener);
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

  // Getting expo push notifications token
  public static getExpoPushToken(): string | undefined {
    return this.expoPushToken;
  }
}

export default NotificationProvider;
