import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native'

interface SelectedCategory {
  isSelected: boolean;
}

interface SelectedCategoryText {
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`

export const Header = styled.View`
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
  height: 40px;
  max-height: 40px;
  margin-top: 14px;
  margin-left: 40px;
  overflow: visible;
`;

export const CategoriesListButton = styled(BorderlessButton)`
  flex-direction: column;
  margin-right: 32px;
  margin-top: 8px;
`;

export const GreenBorder = styled.View<SelectedCategory>`
  ${(props) => props.isSelected && css`
    background-color: #10d1a4;
    width: 100%;
    height: 2px;
    margin-top: 6px;
  `}
`;

export const CategoriesListButtonText = styled.Text<SelectedCategoryText>`
  color: #88888a;
  font-size: 12px;
  font-weight: 500;
  ${(props) => props.isSelected && css`
    color: #10d1a4;
  `}
`;

export const Border = styled.View`
  width: 100%;
  height: 2px;
  background-color: #E6E6F0;
`;