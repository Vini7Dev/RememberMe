import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const { baby_blue80, cyan90 } = theme.colors;
const { poppins600, heebo400 } = theme.fonts;

export const Container = styled(LinearGradient)`
  position: relative;
  width: 220px;
  height: 160px;
  margin-left: 17px;
  margin-top: 10px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  flex: 1;
  width: 215px;
  margin: 2px 0;
  border-radius: 23px;
  background-color: #FFFFFF;
`;

export const TitleView = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(16, 96, 255, 0.25);
`;

export const TitleText = styled.Text`
  width: 100%;
  height: 100%;
  color: ${cyan90};
  font-family: ${poppins600};
  font-size: 18px;
  text-align: center;
`;

export const TaskData = styled.View`
  padding: 5px 10px;
`;

export const DataView = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const DataIcon = styled(Feather)`
  margin-top: 1px;
  margin-right: 5px;
`;

export const DataText = styled.Text`
  width: 180px;
  font-family: ${heebo400};
  font-size: 15px;
  color: ${baby_blue80};
`;

export const CheckButtonView = styled.View`
  position: absolute;
  top: -10px;
  right: -10px;
`;
