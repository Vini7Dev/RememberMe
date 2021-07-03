import React from 'react';

import {
  ModalElement, BarTop, BarTopLine, ModalBody, TitleView, TitleText, ModalContentArea,
} from './styles';
import theme from '../../global/styles/theme';

const { baby_blue70, cyan90 } = theme.colors;

interface IModalContainerProps {
  title: string;
  isVisible?: boolean;
}

const ModalContainer: React.FC<IModalContainerProps> = ({
  title, isVisible = false, children,
}) => {
  return (
    <ModalElement isVisible={isVisible}>
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
    </ModalElement>
  );
};

export default ModalContainer;
