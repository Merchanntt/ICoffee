import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: #fff;
`

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  align-self: center;
  margin-top: 20px;
  padding-bottom: 10px;
`;


export const ScrollList = styled.ScrollView`
  flex: 1;
  padding-bottom: 10px;
  max-height: 330px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const ItemContainer = styled.View`
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
  font-weight: 500;
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
`;

export const RemoveButton = styled(RectButton)`
  position: absolute;
  bottom: 20px;
  right: 10px;
  background-color: #f5bdc8;
  height: 20px;
  width: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const RemoveButtonText = styled.Text`
  color: #db2b39;
  font-size: 10px;
`;

export const PaymentContainer = styled.View`
  margin-top: 4px;
`;

export const PaymentDetails = styled.View`
  border-width: 1px;
  padding: 10px;
  border-color: #E6E6F0;
  justify-content: space-around;
  height: 80px;
`;

export const ServicesDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ServiceTitle = styled.Text`
  color: #88888a;
  font-weight: 500;
`;

export const ServicePrice = styled.Text`
  color: #88888a;
  font-weight: bold;
`;

export const ConfirmPaymentContainer = styled.View`
  padding: 10px;
`;

export const ConfirmPaymentDetails = styled.View`
  margin-top: 25px;
  flex-direction: row;
`;

export const ConfirmPaymentButton = styled(RectButton)`
  height: 60px;
  width: 270px;
  background-color: #10d1a4;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ConfirmPaymentButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
