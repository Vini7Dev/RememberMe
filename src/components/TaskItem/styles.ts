import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const { baby_blue80, cyan90 } = theme.colors;
const { poppins600, heebo400 } = theme.fonts;

export const Container = styled(LinearGradient)`
  flex: 1;
  position: relative;
  width: 103%;
  margin-top: 15px;
  padding: 2px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonElement = styled(RectButton)`
  background-color: #FFFFFF;
  width: 100%;
  border-radius: 23px;
`;

export const TitleView = styled.View`
  width: 100%;
  margin-top: 5px;
  margin-bottom: -5px;
  padding: 0 10px;
`;

export const TitleText = styled.Text`
  width: 100%;
  color: ${cyan90};
  font-family: ${poppins600};
  font-size: 18px;
`;

export const TaskDataArea = styled.View`
  padding: 5px 10px;
`;

export const TaskDataView = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 0;

  border-top-width: 1px;
  border-top-color: ${baby_blue80};
`;

export const TaskDataIcon = styled(Feather)`
  margin-top: 1px;
  margin-right: 5px;
`;

export const TaskDataText = styled.Text`
  flex: 1;
  font-family: ${heebo400};
  font-size: 15px;
  color: ${baby_blue80};
`;

export const DeleteButtonView = styled.View`
  position: absolute;
  top: -10px;
  right: -10px;
`;
