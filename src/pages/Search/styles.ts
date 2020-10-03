import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
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

export const CategoriesList = styled.FlatList`
  position: relative;
  height: 40px;
  margin-top: 20px;
  margin-left: 40px;
  overflow: visible;
`;

export const CategoriesListButton = styled(BorderlessButton)`
  margin-right: 40px;
`;

export const CategoriesListButtonText = styled.Text`
  color: #10d1a4;
  font-size: 12px;
  font-weight: 500;
`;

export const Border = styled.View`
  width: 100%;
  height: 2px;
  background-color: #E6E6F0;
  position: absolute;
  margin-left: -40px;
  bottom: 0;
`;