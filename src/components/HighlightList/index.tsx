import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Animated, TouchableWithoutFeedback} from 'react-native'

import api from '../../services/api';

import { 
  Container, 
  Highlight,
  Main, 
  Header, 
  CoffeShopImage, 
  CoffeShopInfo, 
  CoffeShopName, 
  CoffeShopLocale, 
  Footer,
  BeverageName,
  BeverageCategory
} from './styles';

interface CoffeesData {
  id: number;
  CoffeShopImage: string;
  CoffeShop: string;
  CoffeShopAddress: string;
  CoffeImage: string;
  CoffeName: string;
  CoffeCategory: string;
}

interface ItemId {
  id: number;
}

interface HighlightListProps {
  scrollListY: any;
}

const AnimatedList = Animated.createAnimatedComponent(Highlight)
const AnimatedMain = Animated.createAnimatedComponent(Main)

const HighlightList: React.FC<HighlightListProps> = ({scrollListY}) => {
  const [CoffesList, setCoffesList] = useState<CoffeesData[]>([])

  const {navigate} = useNavigation()
  const scrollX = new Animated.Value(0)

  useEffect(() => {
    async function loadData() {
      const response = await api.get<CoffeesData[]>('Coffees')
      setCoffesList(response.data)
    }
    loadData()
  }, [] )

  const handleNavigateDetailsPage = useCallback((data) => {
    navigate('Detail', {data})
  }, [])

  const height = scrollListY.interpolate({
    inputRange: [0, 150],
    outputRange: [330, 250],
    extrapolate: 'clamp'
  })

  const width = scrollListY.interpolate({
    inputRange: [0, 150],
    outputRange: [230, 170],
    extrapolate: 'clamp'
  })

  const snap = scrollListY.interpolate({
    inputRange: [0, 150],
    outputRange: [240, 180],
    extrapolate: 'clamp'
  })

  return (
    <Container>
      <AnimatedList 
        data={CoffesList}
        horizontal
        keyExtractor= {(item: ItemId) => String(item.id)}
        snapToInterval= {snap}
        scrollEventThrottle= {16}
        decelerationRate= {0}
        showsHorizontalScrollIndicator= {false}
        onScroll={Animated.event(
          [
            {nativeEvent: {contentOffset: {x: scrollX}}}
          ],
          {useNativeDriver: false}
        )}
        renderItem = {({ item, index }) => {
          const inputRange = [
            (index - 1) * 240,  
            index * 240,  
            (index + 1) * 240,  
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 1],
            extrapolate: 'clamp'
          })

          return (
          <TouchableWithoutFeedback 
            onPress={() => handleNavigateDetailsPage(item)}
          >
          <AnimatedMain 
            source={{uri: item.CoffeImage}} 
            imageStyle={{borderRadius: 8}}
            style= {{transform: [{scale}], height, width}}
          >
            <Header>
              <CoffeShopImage source={{uri: item.CoffeShopImage}}/>
              <CoffeShopInfo>
              <CoffeShopName>{item.CoffeShop}</CoffeShopName>
                <CoffeShopLocale>{item.CoffeShopAddress}</CoffeShopLocale>
              </CoffeShopInfo>
            </Header>
            <Footer>
              <BeverageName>{item.CoffeName}</BeverageName>
              <BeverageCategory>{item.CoffeCategory}</BeverageCategory>
            </Footer>
          </AnimatedMain>
          </TouchableWithoutFeedback>
      )}}
      />
    </Container>
  );
}

export default HighlightList;