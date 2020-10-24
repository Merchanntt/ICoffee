import React, { useCallback, useEffect, useState } from 'react';
import {Feather,  } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'

import { IState } from '../../store/redux';
import { IItemsData } from '../../store/modules/cart/cartTypes';
import { RemoveProductsToCart } from '../../store/modules/cart/actions';
import PricesHandler from '../../services/formatedPrice';

import { 
  Container, 
  Title,
  DefaultView,
  DefaultText,
  ScrollList,
  ItemContainer,
  CoffeeImage,
  CoffeName,
  CoffeDescription,
  CoffeeInfo,
  CoffePrice,
  RemoveButton,
  RemoveButtonText,
  PaymentContainer,
  PaymentDetails,
  ServicesDetails,
  ServiceTitle,
  ServicePrice,
  ConfirmPaymentContainer,
  ConfirmPaymentDetails,
  ConfirmPaymentButton,
  ConfirmPaymentButtonText,
} from './styles';
import { View } from 'react-native';

export interface CartList {
  id: number;
  image: string;
  name: string;
  price: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const cartList = useSelector<IState, IItemsData[]>(state => state.cart.items);
  const dispatch = useDispatch();
  const pricesHandler = new PricesHandler();

  const [items, setItems] = useState<CartList[]>([]);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const [totalPriceWithDelivery, setTotalwithDelivery] = useState('0,00');
  
  const handleRemoveItem = useCallback((item: CartList) => {
    dispatch(RemoveProductsToCart(item))
  }, [])

  useEffect(() => {
    const total = cartList.map((item: IItemsData) => ({
      ...item,
      price: pricesHandler.FormatedPrice(item.price)
    }))
    setItems(total)
  }, [cartList])

  useEffect(() => {
    const [total, totalWithDelivery] = pricesHandler.TotalPrice(cartList)
    setTotalPrice(total)
    setTotalwithDelivery(totalWithDelivery)
  }, [cartList])

  return (
    <Container>
        <Title>Minha sacola</Title>
      {items.length === 0 
        ? (
          <DefaultView >
            <Feather name='shopping-bag' size={72} color='#f5bdc8'/>
            <DefaultText>Você ainda não adicionou nada{'\n'} a sua sacola :(</DefaultText>
          </DefaultView>
        )
        : (
          <ScrollList
          >
            {items.map((item: CartList) => (
              <ItemContainer key={item.id}>
                <CoffeeImage source={{uri: item.image }}/>
                <CoffeeInfo>
                  <CoffeName>{item.name}</CoffeName>
                  <CoffeDescription>Quantidade {item.quantity}</CoffeDescription>
                  <CoffePrice>{item.price}</CoffePrice>
                </CoffeeInfo>
                <RemoveButton onPress={() => handleRemoveItem(item)}>
                  <RemoveButtonText>Remover</RemoveButtonText>
                </RemoveButton>
              </ItemContainer>
            ))}
            </ScrollList>
        )
      }
      <PaymentContainer>
        <PaymentDetails>
          <ServicesDetails>
            <ServiceTitle>Subtotal</ServiceTitle>
            <ServicePrice>{totalPrice}</ServicePrice>
          </ServicesDetails>
          <ServicesDetails>
            <ServiceTitle>Delivery</ServiceTitle>
            <ServicePrice>R$: 7,00</ServicePrice>
          </ServicesDetails>
        </PaymentDetails>
        <ConfirmPaymentContainer>
          <ServicesDetails>
            <ServiceTitle>Total</ServiceTitle>
            <ServicePrice>{totalPriceWithDelivery}</ServicePrice>
          </ServicesDetails>
          <ConfirmPaymentDetails>
            <ConfirmPaymentButton>
              <ConfirmPaymentButtonText>Pagar Agora</ConfirmPaymentButtonText>
            </ConfirmPaymentButton>
            <Feather name='credit-card' size={60} color='#10d1a4'/>
          </ConfirmPaymentDetails>
        </ConfirmPaymentContainer>
      </PaymentContainer>
    </Container>
  );
}

export default Cart;