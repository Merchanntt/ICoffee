import React, {useEffect, useState} from 'react';
import {Feather,  } from '@expo/vector-icons'

import api from '../../services/api';

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

interface CoffeesInfo {
  id: number;
  CoffeImage: string;
  CoffeName: string;
  price: string;
}

const Cart: React.FC = () => {
  const [CoffesList, setCoffesList] = useState<CoffeesInfo[]>([])

  useEffect(() => {
    async function loadData() {
      const response = await api.get<CoffeesInfo[]>('Coffees')
      setCoffesList(response.data)
    }
    loadData()
  }, [] )

  return (
    <Container>
        <Title>Minha sacola</Title>
      <ScrollList
      showsVerticalScrollIndicator={false}      
    >
      {CoffesList.map((item: CoffeesInfo) => (
        <ItemContainer key={item.id}>
          <CoffeeImage source={{uri: item.CoffeImage}}/>
          <CoffeeInfo>
            <CoffeName>{item.CoffeName}</CoffeName>
            <CoffeDescription>Quantidade 2</CoffeDescription>
            <CoffePrice>R$: {item.price}</CoffePrice>
          </CoffeeInfo>
          <RemoveButton>
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