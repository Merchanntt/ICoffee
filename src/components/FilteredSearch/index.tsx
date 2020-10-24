import React, {useState, useEffect, useCallback } from 'react';
import {Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import PriceHanlder from '../../services/formatedPrice';

import { 
  SearchList,
  ItemContainer,
  CoffeeImage,
  CoffeName,
  CoffeDescription,
  CoffeeInfo,
  CoffePrice,
} from './styles';

interface SearchedCoffesData {
  id: number;
  CoffeName: string;
  CoffeDescription: string;
  price: number;
}

interface ItemId {
  id: number;
}

interface FilteredSearchProps {
  searchValue: string;
  categoryValue: string;
}

const FilteredSearch: React.FC<FilteredSearchProps> = ({ categoryValue, searchValue }) => {
  const [searchedCoffes, setSearchedCoffes] = useState<SearchedCoffesData[]>([])
  const [unformatedPrices, setUnformatedPrices] = useState<number[]>([])
  const priceHanlder = new PriceHanlder()

  const {navigate} = useNavigation()
  
  useEffect(() => {
    api.get('Coffees', {
      params: {
        CoffeName_like: searchValue,
        CoffeCategory_like: categoryValue === 'Todos' ? '' : categoryValue
      }
    }).then(response => {
      setUnformatedPrices(response.data.map((item: SearchedCoffesData) => item.price))
      setSearchedCoffes(response.data.map((item: SearchedCoffesData) => ({
        ...item,
        price: priceHanlder.FormatedPrice(item.price)
      })))
    })
  }, [searchValue])

  const handleNavigateToDetails = useCallback((item, itemIndex) => {
    const price = unformatedPrices.find((item, index) => index === itemIndex)
    const data = {
      ...item,
      price
    }
    navigate('Detail', {data})
  }, [navigate, unformatedPrices])

  return (
    <SearchList 
      data={searchedCoffes}
      showsVerticalScrollIndicator={false}
      style={{
        width: Dimensions.get('window').width,
      }}
      keyExtractor= {(item: ItemId) => String(item.id)}
      renderItem= {({ item, index }) => (
        <ItemContainer onPress={() => handleNavigateToDetails(item, index)}>
          <CoffeeImage source={{uri: item.CoffeImage}}/>
          <CoffeeInfo>
            <CoffeName>{item.CoffeName}</CoffeName>
            <CoffeDescription>{item.CoffeDescription} </CoffeDescription>
          </CoffeeInfo>
            <CoffePrice>{item.price}</CoffePrice>
      </ItemContainer>
      )}
    />  
  );
}

export default FilteredSearch;