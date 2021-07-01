import React from 'react';
import {
  View, Text, Modal, ModalProps,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import theme from '../../global/styles/theme';

const { baby_blue70, cyan90 } = theme.colors;

interface IModalContainerProps extends ModalProps {
  title: string;
}

const ModalContainer: React.FC<IModalContainerProps> = ({ title, children }) => {
  return (
    <Modal
      animationType="slide"
      statusBarTranslucent
    >
      <LinearGradient
        style={styles.barTop}
        colors={[baby_blue70, cyan90]}
      >
        <View style={styles.barTopLine} />
      </LinearGradient>

      <View
        style={styles.container}
      >
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.contentArea}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalContainer;
