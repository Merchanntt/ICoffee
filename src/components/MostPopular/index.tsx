import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native'
import api from '../../services/api';

import HighlightList from '../../components/HighlightList';

import { 
  Container,
  ScrollList,
  ListTitle,
  ItemContainer,
  CoffeeImage,
  CoffeName,
  CoffeDescription,
  CoffeeInfo,
  CoffeeShopImage,
} from './styles';

const ScrollContainer = Animated.createAnimatedComponent(ScrollList);

interface CoffeesInfo {
  id: number;
  CoffeShopImage: string;
  CoffeImage: string;
  CoffeName: string;
  CoffeDescription: string;
}

const MostPopularList: React.FC = () => {
  const [CoffesList, setCoffesList] = useState<CoffeesInfo[]>([])

  const scrollY = new Animated.Value(0)

  useEffect(() => {
    async function loadData() {
      const response = await api.get<CoffeesInfo[]>('Coffees')
      setCoffesList(response.data)
    }
    loadData()
  }, [] )

  return (
    <>
    <HighlightList scrollListY={scrollY}/>
    <Container>
    <ListTitle>Produtos mais vendidos</ListTitle>
    <ScrollContainer
      showsVerticalScrollIndicator={false}
      scrollEventThrottle= {16}
      bounces={false}
      onScroll={Animated.event(
        [
          {nativeEvent: {contentOffset: {y: scrollY}}}
        ],
        {useNativeDriver: false}
      )}
    >
      {CoffesList.map((item: CoffeesInfo) => (
        <ItemContainer key={item.id}>
          <CoffeeImage source={{uri: item.CoffeImage}}/>
          <CoffeeInfo>
            <CoffeName>{item.CoffeName}</CoffeName>
            <CoffeDescription>{item.CoffeDescription}</CoffeDescription>
          </CoffeeInfo>
          <CoffeeShopImage source={{uri: item.CoffeShopImage}}/>
        </ItemContainer>
      ))}
      </ScrollContainer>
    </Container>
    </>
  );
}

export default MostPopularList;