import React, { useContext} from 'react';
import { View } from 'react-native';

import Header from '../../components/Delivery';
import MostPopularList from '../../components/MostPopular';
import { ModalizeContext } from '../../components/BottomSheet'

import { 
  Container,
  Main,
} from './styles';
import { StatusBar } from 'expo-status-bar';

const Home: React.FC = () => {
  const { modalOpen } = useContext(ModalizeContext)

  return (
    <Container >
      <StatusBar style={modalOpen ? 'light' : 'dark'}/>
      <Main ModelIsOpen={modalOpen}>
        <Header />
        <MostPopularList />
      </Main>
    </Container>
  );
}

export default Home;