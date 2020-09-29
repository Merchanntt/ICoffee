import React from 'react';
import {Feather} from '@expo/vector-icons'

import { 
  Header,
  DeliveryContainer,
  Address,
  AddressTitle,
  AddressButton,
  AddressInfo,
  ProfileImage,
} from './styles';

const Delivery: React.FC = () => {
  return (
    <Header>
      <DeliveryContainer>
        <Feather name='map-pin' size={30} color='#10d1a4'/>
        <Address>
          <AddressTitle>Delivery</AddressTitle>
          <AddressButton>
            <AddressInfo>179, Rua Alvir Teixeira dos Santos.</AddressInfo>
            <Feather name='chevron-down' size={20} color='#88888a'/>
          </AddressButton>
        </Address>
      </DeliveryContainer>
      <ProfileImage/>
    </Header>
  );
}

export default Delivery;