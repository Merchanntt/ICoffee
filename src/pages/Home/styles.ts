import styled, { css } from 'styled-components/native'

interface ContainerProps {
  ModelIsOpen: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View<ContainerProps>`
  flex: 1;
  ${(props) => props.ModelIsOpen && css`
    transform: scale(0.97) translateY(5px);
    border-radius: 20px;
  `};
`;