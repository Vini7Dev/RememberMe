import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const { cyan90 } = theme.colors;
const { poppins600, heebo500 } = theme.fonts;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #F1F1F1;
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

export const SubtitleText = styled.Text`
  color: ${cyan90};
  font-family: ${heebo500};
  font-size: 22px;
`;

export const TasksListArea = styled.View`
  background-color: #FFFFFF;
  margin: 15px 10px 25px 10px;
  border-radius: 15px;
  padding: 15px;
  elevation: 5;
`;

export const TasksListTitleView = styled.View`
  position: relative;
`;

export const TasksListTitleText = styled.Text`
  color: ${cyan90};
  font-family: ${poppins600};
  font-size: 30px;
  text-align: center;
`;

export const FilterButtonView = styled.View`
  position: absolute;
  top: 2px;
  right: 0;
`;

export const Form = styled.View`
  padding: 0 20px;
`;

export const InputMargin = styled.View`
  margin-bottom: 18px;
`;
