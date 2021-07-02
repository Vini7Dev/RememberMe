import React from 'react';
import {
  Modal, ModalProps,
} from 'react-native';

import {
  BarTop, BarTopLine, ModalBody, TitleView, TitleText, ModalContentArea,
} from './styles';
import theme from '../../global/styles/theme';

const { baby_blue70, cyan90 } = theme.colors;

interface IModalContainerProps extends ModalProps {
  title: string;
}

const ModalContainer: React.FC<IModalContainerProps> = ({ title, children, ...rest }) => {
  return (
    <Modal
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <BarTop
        colors={[baby_blue70, cyan90]}
      >
        <BarTopLine />
      </BarTop>

      <ModalBody>
        <TitleView>
          <TitleText>{title}</TitleText>
        </TitleView>

        <ModalContentArea>
          {children}
        </ModalContentArea>
      </ModalBody>
    </Modal>
  );
};

export default ModalContainer;
