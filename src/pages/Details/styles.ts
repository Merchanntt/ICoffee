import { RectButton , BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface CupSizeTextProps {
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const CoffeeImage = styled.ImageBackground`
  height: 45%;
`;

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Title  = styled.TextInput`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

export const Main = styled.View`
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  height: 75%;
  padding: 10px;
`;

export const NameContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CoffeeName = styled.Text`
  font-weight: 700;
  line-height: 24px;
  font-size: 20px;
  width: 300px;
  color: #88888a;
`;

export const CoffeeShopImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const OptionsContainer = styled.View`
  padding: 10px;
`;

export const OptionsTitleContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const OptionsTitleSize = styled.Text`
  font-size: 14px;
  color: #88888a;
  font-weight: 500;
`;

export const OptionsCoffePrice = styled.Text`
  font-size: 14px;
  color: #10d1a4;
  font-weight: 500;
`;

export const OptionsSelection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const CupsSize = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 140px;
`;

export const CupSizeTextButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`;

export const CupSizeText = styled.Text<CupSizeTextProps>`
  font-size: 10px;
  color: ${props => props.isSelected ? '#10d1a4' : '#c2f4eb'};
  font-weight: 600;
`;

export const QuantityContainer = styled.View`
  width: 90px;
  height: 30px;
  background-color: #10d1a4;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`;

export const SumButtons = styled(RectButton)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const SumButtonsText = styled.Text`
  font-weight: bold;
  color: #10d1a4;
  font-size: 16px;
`;

export const Quantity = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;

export const DescriptionContainer = styled.View`
  padding: 10px;
`;

export const ContainerTitle = styled.Text`
  font-size: 16px;
  color: #88888a;
  font-weight: 500;
`;

export const Description = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #88888a;
  font-weight: 400;
  margin-top: 5px;
`;
export const LikeContainer = styled(BorderlessButton)`
  width: 45px;
  height: 45px;
  border-radius: 22px;
  background-color: #c2f4eb;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

export const ConfirmPaymentDetails = styled.View`
  margin-top: 15px;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ConfirmPaymentButton = styled(RectButton)`
  height: 60px;
  width: 270px;
  background-color: #10d1a4;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ConfirmPaymentButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

