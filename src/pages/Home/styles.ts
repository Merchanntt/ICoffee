import styled, { css } from 'styled-components/native'

interface ContainerProps {
  ModelIsOpen: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: #fff;
  ${(props) => props.ModelIsOpen && css`
    transform: scale(0.92);
  `};
`;