import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler';

export const SearchList = styled.FlatList`
  padding-right: 10px;
  padding-left: 10px;
  min-height: 100%;
`;

export const ItemContainer = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
`;

export const CoffeeImage = styled.Image`
  height: 80px;
  width: 70px;
  border-radius: 8px;
`;

export const CoffeeInfo = styled.View`
  margin-left: 10px;
`;

export const CoffeName = styled.Text`
  font-size: 14px;
  max-width: 180px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #88888a;
`;

export const CoffeDescription = styled.Text`
  font-size: 10px;
  max-width: 270px;
  color: #88888a;
`;

export const CoffePrice = styled.Text`
  color: #10d1a4;
  font-weight: 500;
  margin-top: 6px;
  position: absolute;
  top: 5px;
  right: 20px;
`;
