import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const { baby_blue90, cyan90 } = theme.colors;
const { poppins600, heebo500 } = theme.fonts;

export const Container = styled.ScrollView`
  flex: 1;
  background: #FFFFFF;
`;

export const TitleView = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${cyan90};
  font-family: ${poppins600};
  font-size: 30px;
  margin-bottom: -18px;
`;

export const Form = styled.View`
  margin-top: 15px;
  padding: 0 20px;
`;

export const InputMargin = styled.View`
  margin: 6px 0;
`;

export const PeriodSelectorView = styled.View`
  padding: 0 8px;
  border-radius: 20px;
  background-color: #F1F1F1;
`;

export const TimeLabel = styled.Text`
  margin-top: 10px;
  margin-bottom: -10px;
  margin-left: 8px;
  color: ${baby_blue90};
  font-size: 20px;
  font-family: ${heebo500};
`;

export const TimeInputsContainer = styled.View`
  flex-direction: row;
`;

export const TimeDivisionText = styled.Text`
  font-family: ${heebo500};
  font-size: 40px;
  line-height: 70px;
  color: ${baby_blue90};
  margin: 0 3px;
`;

export const SubmitButtonView = styled.View`
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
