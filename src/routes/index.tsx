import React from 'react';
import {NavigationContainer,} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import TabRoutes from './tabNavigation';

const {Navigator, Screen} = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Dashboard' component={TabRoutes}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;