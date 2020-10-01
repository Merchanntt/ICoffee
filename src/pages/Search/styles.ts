import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`

export const Header = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export const SearchContainer = styled.View`
  background-color: #c2f4eb;
  width: 90%;
  height: 40px;
  border-radius: 50px;
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SearchInput = styled.TextInput`
  margin-left: 10px;
  color: #88888a;
  font-size: 14px;
  width: 200px;
  margin-right: auto;
`;
