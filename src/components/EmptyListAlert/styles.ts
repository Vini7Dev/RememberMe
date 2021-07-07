import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

// Theme colors and fonts
const { text } = theme.colors;
const { heebo500 } = theme.fonts;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 15px 0 5px;
`;

export const AlertText = styled.Text`
  font-family: ${heebo500};
  font-size: 20px;
  color: ${text};
`;
