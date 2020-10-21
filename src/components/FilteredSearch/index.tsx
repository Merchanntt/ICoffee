import React, {useState, useEffect, useCallback } from 'react';
import {Dimensions, FlatListProps} from 'react-native'
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

interface FilteredSearchProps {
  searchValue: string;
  categoryValue: string;
}

const FilteredSearch: React.FC<FilteredSearchProps> = ({ categoryValue, searchValue }) => {
  const [searchedCoffes, setSearchedCoffes] = useState<SeachedCoffesData[]>([])

  const {navigate} = useNavigation()
  
  useEffect(() => {
    api.get('Coffees', {
      params: {
        CoffeName_like: searchValue,
        CoffeCategory_like: categoryValue === 'Todos' ? '' : categoryValue
      }
    }).then(response => {
      setSearchedCoffes(response.data)
    })
  }, [searchValue])

  const handleNavigateToDetails = useCallback((data) => {
    navigate('Detail', {data})
  }, [navigate])

  return (
    <SearchList 
      data={searchedCoffes}
      showsVerticalScrollIndicator={false}
      style={{
        width: Dimensions.get('window').width,
      }}
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