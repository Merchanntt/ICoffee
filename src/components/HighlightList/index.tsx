import React, { useEffect, useState } from 'react';
import {Animated} from 'react-native'
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

const AnimatedList = Animated.createAnimatedComponent(Highlight)
const AnimatedMain = Animated.createAnimatedComponent(Main)

const HighlightList: React.FC = () => {
  const [CoffesList, setCoffesList] = useState<CoffeesData[]>([])
  const scrollX = new Animated.Value(0)

  useEffect(() => {
    async function loadData() {
      const response = await api.get<CoffeesData[]>('Coffees')
      setCoffesList(response.data)
    }
    loadData()
  }, [] )

  const scale = scrollX.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.8],
    extrapolate: 'clamp'
  })

  return (
    <Container>
      <AnimatedList 
        data={CoffesList}
        horizontal
        keyExtractor= {(item) => item.id}
        scrollEventThrottle= {16}
        showsHorizontalScrollIndicator= {false}
        onScroll={Animated.event(
          [
            {nativeEvent: {contentOffset: {x: scrollX}}}
          ],
          {useNativeDriver: true}
        )}
        renderItem = {({ item }) => (
          <AnimatedMain 
            source={{uri: item.CoffeImage}} 
            imageStyle={{borderRadius: 8}}
            style= {{transform: [{scale}]}}
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
      )}
      />
    </Container>
  );
}

export default HighlightList;