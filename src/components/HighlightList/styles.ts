import styled from 'styled-components/native'

export const Container = styled.View`
`

export const Highlight = styled.FlatList`
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 20px;
`

export const Main= styled.ImageBackground`
  height: 330px;
  width: 230px;
  border-radius: 8px;
  margin-right: 10px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const CoffeShopImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CoffeShopInfo = styled.View`
  margin-left: 8px;
`;

export const CoffeShopName = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const CoffeShopLocale = styled.Text`
  color: #fff;
  font-size: 10px;
`;

export const Footer = styled.View`
  padding: 15px;
`;

export const BeverageName = styled.Text`
  color: #fff;
  font-size: 10px;
  line-height: 12px;
  max-width: 210px;
`;

export const BeverageCategory = styled.Text`
  color: #fff;
  margin-top: 4px;
  font-size: 10px;
`;



