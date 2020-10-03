import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import { 
  Container,
  CoffeeImage,
  Header,
  Title, 
  Main,
  NameContainer,
  CoffeeName,
  CoffeeShopImage,
  OptionsContainer,
  OptionsTitleContainer,
  OptionsTitleSize,
  OptionsCoffePrice,
  OptionsSelection,
  CupsSize,
  QuantityContainer,
  SumButtons,
  SumButtonsText,
  Quantity,
  DescriptionContainer,
  ContainerTitle,
  Description,
  ConfirmPaymentDetails,
  LikeContainer,
  ConfirmPaymentButton,
  ConfirmPaymentButtonText,
} from './styles';

interface CoffeesData {
  id: number;
  CoffeShopImage: string;
  CoffeImage: string;
  CoffeName: string;
  CoffeCategory: string;
  CoffeDescription: string;
  price: string;
}

const Details: React.FC = () => {
  const route = useRoute()
  const {goBack} = useNavigation()

  const [quantity, setQuantity] = useState(1)

  const coffee: CoffeesData = route.params.data

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])

  const handleDecreaseQuantity = useCallback(() => {
    if(quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }, [quantity])

  return (
    <Container>
    <StatusBar style='light' />
      <CoffeeImage source={{uri: coffee.CoffeImage}}>
        <Header>
          <BorderlessButton onPress={() => goBack()}>
            <Feather name='arrow-left' size={20} color='#fff'/>
          </BorderlessButton>
          <Title>Produto</Title>
          <Feather name='more-horizontal' size={20} color='#fff'/>
        </Header>
      </CoffeeImage>
      <Main>
        <NameContainer>
          <CoffeeName>{coffee.CoffeName}</CoffeeName>
          <CoffeeShopImage source={{uri: coffee.CoffeShopImage}} />
        </NameContainer>
        <OptionsContainer>
          <OptionsTitleContainer>
            <OptionsTitleSize>Tamanho:</OptionsTitleSize>
            <OptionsCoffePrice>R$: {coffee.price}</OptionsCoffePrice>
          </OptionsTitleContainer>
          <OptionsSelection>
            <CupsSize>
              <Feather name='coffee' size={44} color='#10d1a4'/>
              <Feather name='coffee' size={39} color='#10d1a4'/>
              <Feather name='coffee' size={34} color='#10d1a4'/>
            </CupsSize>
            <QuantityContainer>
              <SumButtons onPress={handleDecreaseQuantity}>
                <SumButtonsText>-</SumButtonsText>
              </SumButtons>
              <Quantity>{quantity}</Quantity>
              <SumButtons onPress={handleIncreaseQuantity}>
                <SumButtonsText>+</SumButtonsText>
              </SumButtons>
            </QuantityContainer>
          </OptionsSelection>
        </OptionsContainer>
        <DescriptionContainer>
          <ContainerTitle>Descrição:</ContainerTitle>
          <Description>{coffee.CoffeDescription}</Description>
        </DescriptionContainer>
        <ConfirmPaymentDetails>
            <LikeContainer>
              <Feather name='heart' size={30} color='#10d1a4'/>
            </LikeContainer>
            <ConfirmPaymentButton>
              <ConfirmPaymentButtonText>Adicionar a sacola</ConfirmPaymentButtonText>
            </ConfirmPaymentButton>
          </ConfirmPaymentDetails>
      </Main>
    </Container>
  );
}

export default Details;