import React, { useCallback, useContext } from 'react';
import {Feather} from '@expo/vector-icons'

import { ModalizeContext } from '../BottomSheet'

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
  const {isOpen, address} = useContext(ModalizeContext)

  const handleOpenModalize = useCallback(() => {
    isOpen()
  }, [isOpen])

  return (
    <Header>
      <DeliveryContainer>
        <Feather name='map-pin' size={30} color='#10d1a4'/>
        <Address>
          <AddressTitle>Delivery</AddressTitle>
          <AddressButton onPress={handleOpenModalize}>
            <AddressInfo>{
              address === undefined 
              ? 'Escolha o endereço da entrega.'
              : address
            }</AddressInfo>
            <Feather name='chevron-down' size={20} color='#88888a'/>
          </AddressButton>
        </Address>
      </DeliveryContainer>
      <ProfileImage source={{uri: 'https://pbs.twimg.com/profile_images/1308683789279940609/Q32Sw0b6_400x400.jpg'}}/>
    </Header>
  );
}

export default Delivery;