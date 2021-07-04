import styled, { css } from 'styled-components/native';

interface IContainerProps {
  renderButtons: boolean;
  periodType: number;
}

export const Container = styled.View<IContainerProps>`
  flex-wrap: ${(props) => (props.periodType === 0 ? 'wrap' : 'nowrap')};
  flex-direction: ${(props) => (props.periodType === 0 ? 'row' : 'column')};
  ${(props) => (props.periodType === 0
    ? css`
      justify-content: center;
    `
    : css`
      align-items: center;
  `)}
`;
