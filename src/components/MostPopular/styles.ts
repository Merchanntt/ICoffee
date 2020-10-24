import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-right: 10px;
  padding-left: 10px;
`

export const ScrollList = styled.ScrollView`
  flex: 1;
  padding-bottom: 10px;
`;

export const ListTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #88888a;
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
  max-width: 200px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #88888a;
`;

export const CoffeDescription = styled.Text`
  font-size: 10px;
  max-width: 270px;
  color: #88888a;
`;

export const CoffeeShopImage = styled.Image`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 10px;
  top: 10px;
  right: 10px;
`;
