import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 80px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
`;

export const DeliveryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Address = styled.View`
  margin-left: 8px;
`;

export const AddressTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #10d1a4;
`;

export const AddressButton = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AddressInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #88888a;
  max-width: 150px;
  line-height: 18px;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ccc;
`;
