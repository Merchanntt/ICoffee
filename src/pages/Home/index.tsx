import React from 'react';

import Header from '../../components/Delivery';
import MostPopularList from '../../components/MostPopular';

import { 
  Container
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <MostPopularList />
    </Container>
  );
}

export default Home;