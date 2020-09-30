import React from 'react';

import Header from '../../components/Delivery';
import HighlightList from '../../components/HighlightList';
import MostPopularList from '../../components/MostPopular';

import { 
  Container
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HighlightList />
      <MostPopularList />
    </Container>
  );
}

export default Home;