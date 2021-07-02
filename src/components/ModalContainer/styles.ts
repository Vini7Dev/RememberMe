import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const { cyan90 } = theme.colors;
const { poppins600 } = theme.fonts;

export const BarTop = styled(LinearGradient)`
    margin-top: 25px;
    height: 30px;
    justify-content: center;
    align-items: center;
`;

export const BarTopLine = styled.View`
  width: 50px;
  border-width: 2px;
  border-color: ${cyan90};
`;

export const ModalBody = styled.View`
  flex: 1;
`;

export const TitleView = styled.View`
  margin-top: 5px;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${cyan90};
  font-family: ${poppins600};
  font-size: 30px;
  line-height: 33px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: -18px;
  width: 80%;
`;

export const ModalContentArea = styled.View`
  margin-top: 20px;
`;
