import React, { useEffect, useState } from 'react';
import api from '../../services/api';

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

interface CoffeesInfo {
  id: number;
  CoffeShopImage: string;
  CoffeImage: string;
  CoffeName: string;
  CoffeDescription: string;
}

const MostPopularList: React.FC = () => {
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
    <ListTitle>Produtos mais vendidos</ListTitle>
    <ScrollList
      showsVerticalScrollIndicator={false}
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
      </ScrollList>
    </Container>
  );
}

export default MostPopularList;