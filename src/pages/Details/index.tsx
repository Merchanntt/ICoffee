import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';
import {useDispatch} from 'react-redux';

import { FormatedPrice } from '../../services/formatedPrice';
import { addProductsToCart } from '../../store/modules/cart/actions';
import HeartAnimation from '../../assets/HeartAnimation.json';

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
  CupSizeTextButton,
  CupSizeText,
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
  const animation = useRef<Lottie>(null)
  const dispatch = useDispatch()

  const coffee = route.params?.data as CoffeesData

  const [quantity, setQuantity] = useState(1)
  const [cupSize, setCupSize] = useState(1)
  const [cupPrice, setCupPrice] = useState(coffee.price)
  const [like, setLike] = useState(false)

  useEffect(() => {
    const [real, centavos] = coffee.price.split(',')

    const converted = Number(real + centavos)

    switch (cupSize) {
      case 1:
        const PriceHandler = String(converted * 1 * quantity)

        const formatedPrice = FormatedPrice(PriceHandler)

        setCupPrice(formatedPrice)
        break;

      case 2:
        const PriceHandler400 = String(converted * 1.3 * quantity)

        const formatedPrice400 = FormatedPrice(PriceHandler400)

        setCupPrice(formatedPrice400)
        break;

      case 3:
        const PriceHandler500 = String(converted * 1.6 * quantity)

        const formatedPrice500 = FormatedPrice(PriceHandler500)

        setCupPrice(formatedPrice500)
        break;

      default:
        break;
    }
  }, [cupSize, quantity])

  const handleSelectedCupSize = useCallback((size: number) => {
    setCupSize(size)
  }, [])

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])

  const handleDecreaseQuantity = useCallback(() => {
    if(quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }, [quantity])

  const handleLikedCoffees = useCallback(() => {
    setLike(!like)
    like === true ? animation.current?.play() : animation.current?.reset()
  }, [like])

  const handleAddItemsToCart = useCallback(() => {
    const product = {
      id: coffee.id,
      image: coffee.CoffeImage,
      name: coffee.CoffeName,
      price: cupPrice,
      quantity
    }

    dispatch(addProductsToCart(product))
    goBack()
  }, [dispatch, coffee.id, coffee.CoffeName, coffee.CoffeImage, cupPrice, quantity])

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
            <OptionsCoffePrice>R$: {cupPrice}</OptionsCoffePrice>
          </OptionsTitleContainer>
          <OptionsSelection>
            <CupsSize>
              <CupSizeTextButton onPress={() => handleSelectedCupSize(3)}>
                <Feather 
                  name='coffee' 
                  size={44} 
                  color={cupSize === 3 ? '#10d1a4' : '#c2f4eb'}
                />
                <CupSizeText isSelected={cupSize === 3}>500ml</CupSizeText>
              </CupSizeTextButton>
              <CupSizeTextButton onPress={() => handleSelectedCupSize(2)}>
                <Feather 
                  name='coffee' 
                  size={39} 
                  color={cupSize === 2 ? '#10d1a4' : '#c2f4eb'}
                />
                <CupSizeText isSelected={cupSize === 2}>400ml</CupSizeText>
              </CupSizeTextButton>
              <CupSizeTextButton onPress={() => handleSelectedCupSize(1)}>
                <Feather 
                  name='coffee' 
                  size={34}
                  color={cupSize === 1 ? '#10d1a4' : '#c2f4eb'}
                />
                <CupSizeText isSelected={cupSize === 1}>300ml</CupSizeText>
              </CupSizeTextButton>
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
            <LikeContainer onPress={handleLikedCoffees}>
                <Lottie 
                ref={animation}
                source={HeartAnimation}
                resizeMode='contain'
                loop={false}
                style={{
                  width: 60,
                }}
              />
            </LikeContainer>
            <ConfirmPaymentButton onPress={handleAddItemsToCart}>
              <ConfirmPaymentButtonText>Adicionar a sacola</ConfirmPaymentButtonText>
            </ConfirmPaymentButton>
          </ConfirmPaymentDetails>
      </Main>
    </Container>
  );
}

export default Details;