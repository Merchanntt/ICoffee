import React, { useCallback, useEffect, useState } from 'react';
import {Feather,  } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'

import { IState } from '../../store/redux';
import { IItemsData } from '../../store/modules/cart/cartTypes';
import { RemoveProductsToCart } from '../../store/modules/cart/actions';

import { 
  Container, 
  Title,
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

const Cart: React.FC = () => {
  const cartList = useSelector<IState, IItemsData[]>(state => state.cart.items)
  const dispatch = useDispatch()

  const handleRemoveItem = useCallback((item: IItemsData) => {
    dispatch(RemoveProductsToCart(item))
  }, [])

  return (
    <Container>
        <Title>Minha sacola</Title>
      <ScrollList
      showsVerticalScrollIndicator={false}      
    >
      {cartList.map((item: IItemsData) => (
        <ItemContainer key={item.id}>
          <CoffeeImage source={{uri: item.image }}/>
          <CoffeeInfo>
            <CoffeName>{item.name}</CoffeName>
            <CoffeDescription>Quantidade {item.quantity}</CoffeDescription>
            <CoffePrice>R$: {item.price}</CoffePrice>
          </CoffeeInfo>
          <RemoveButton onPress={() => handleRemoveItem(item)}>
            <RemoveButtonText>Remover</RemoveButtonText>
          </RemoveButton>
        </ItemContainer>
      ))}
      </ScrollList>
      <PaymentContainer>
        <PaymentDetails>
          <ServicesDetails>
            <ServiceTitle>Subtotal</ServiceTitle>
            <ServicePrice>R$: 15,00</ServicePrice>
          </ServicesDetails>
          <ServicesDetails>
            <ServiceTitle>Delivery</ServiceTitle>
            <ServicePrice>R$: 7,00</ServicePrice>
          </ServicesDetails>
        </PaymentDetails>
        <ConfirmPaymentContainer>
          <ServicesDetails>
            <ServiceTitle>Total</ServiceTitle>
            <ServicePrice>R$: 22,00</ServicePrice>
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