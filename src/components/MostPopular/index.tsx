import React, { useCallback, useEffect, useState } from 'react';
import { Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native';
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
import { ScrollView } from 'react-native-gesture-handler';

const ScrollContainer = Animated.createAnimatedComponent(ScrollList);
const AnimatedContainer = Animated.createAnimatedComponent(Container);

interface CoffeesInfo {
  id: number;
  CoffeShopImage: string;
  CoffeImage: string;
  CoffeName: string;
  CoffeDescription: string;
}

const MostPopularList: React.FC = () => {
  const [CoffesList, setCoffesList] = useState<CoffeesInfo[]>([])

  const { navigate } = useNavigation()

  const scrollY = new Animated.Value(0)

  useEffect(() => {
    async function loadData() {
      const response = await api.get<CoffeesInfo[]>('Coffees')
      setCoffesList(response.data)
    }
    loadData()
  }, [] )

  const handleNavigateToDetail = useCallback((data) => {
    navigate('Detail', {data})
  }, [navigate])

  const marginTop = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [360, 270],
    extrapolate: 'clamp'
  })

  return (
    <>
    <HighlightList scrollListY={scrollY}/>
    <AnimatedContainer
      style={{marginTop}}
    >
    <ListTitle>Produtos mais vendidos</ListTitle>
    <ScrollContainer
      showsVerticalScrollIndicator={false}
      scrollEventThrottle= {16}
      onScroll={Animated.event(
        [
          {nativeEvent: {contentOffset: {y: scrollY}}}
        ],
        {useNativeDriver: false}
      )}
    >
 
      {CoffesList.map((item: CoffeesInfo) => (
        <ItemContainer 
          key={String(item.id)} 
          onPress={() => handleNavigateToDetail(item)}
        >
          <CoffeeImage source={{uri: item.CoffeImage}}/>
          <CoffeeInfo>
            <CoffeName>{item.CoffeName}</CoffeName>
            <CoffeDescription>{item.CoffeDescription}</CoffeDescription>
          </CoffeeInfo>
          <CoffeeShopImage source={{uri: item.CoffeShopImage}}/>
        </ItemContainer>
      ))}
      </ScrollContainer>
    </AnimatedContainer>
    </>
  );
}

export default MostPopularList;