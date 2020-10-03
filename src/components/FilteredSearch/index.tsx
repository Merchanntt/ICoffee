import React, {useState, useEffect, useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { 
  SearchList,
  ItemContainer,
  CoffeeImage,
  CoffeName,
  CoffeDescription,
  CoffeeInfo,
  CoffePrice,
} from './styles';

interface SeachedCoffesData {
  id: number;
  CoffeName: string;
  CoffeDescription: string;
  price: string;
}

interface ItemId {
  id: number;
}

const FilteredSearch: React.FC = () => {
  const [searchedCoffes, setSearchedCoffes] = useState<SeachedCoffesData[]>([])

  const {navigate} = useNavigation()
  
  useEffect(() => {
    api.get('Coffees').then(response => {
      setSearchedCoffes(response.data)
    })
  }, [])

  const handleNavigateToDetails = useCallback((data) => {
    navigate('Detail', {data})
  }, [navigate])

  return (
    <SearchList 
      data={searchedCoffes}
      showsVerticalScrollIndicator={false}
      keyExtractor= {(item: ItemId) => String(item.id)}
      renderItem= {({ item }) => (
        <ItemContainer onPress={() => handleNavigateToDetails(item)}>
          <CoffeeImage source={{uri: item.CoffeImage}}/>
          <CoffeeInfo>
            <CoffeName>{item.CoffeName}</CoffeName>
            <CoffeDescription>{item.CoffeDescription} </CoffeDescription>
          </CoffeeInfo>
            <CoffePrice>R$: {item.price}</CoffePrice>
      </ItemContainer>
      )}
    />  
  );
}

export default FilteredSearch;