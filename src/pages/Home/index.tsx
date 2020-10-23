import React, { useContext } from 'react';
import {Animated} from 'react-native';
import { Host } from 'react-native-portalize';

import { StatusBar } from 'expo-status-bar';

import Header from '../../components/Delivery';
import MostPopularList from '../../components/MostPopular';
import { ModalizeContext } from '../../components/BottomSheet';

import { 
  Container,
} from './styles';

const ContainerAnimated = Animated.createAnimatedComponent(Container)

const Home: React.FC = () => {
  const { modalOpen, animated } = useContext(ModalizeContext)

  const scale = animated.interpolate({
    inputRange: [0, 1], 
    outputRange: [1, 0.92],
  })

  const borderRadius = animated.interpolate({
    inputRange: [0, 1], 
    outputRange: [0, 20],
  })

  return (
    <Host style={{backgroundColor: '#000'}}>
      <ContainerAnimated ModelIsOpen={modalOpen} style={{
        transform: [{ scale }], borderRadius
      }}>
        <StatusBar style={modalOpen ? 'light' : 'dark'}/>
          <Header />
          <MostPopularList />
      </ContainerAnimated>
    </Host>
  );
}

export default Home;