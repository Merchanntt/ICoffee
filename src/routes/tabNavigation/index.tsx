import React from 'react';
import {Feather} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Cart from '../../pages/Cart';
import Profile from '../../pages/Profile';
import { Platform } from 'react-native';
import { styles } from '../../components/BottomSheet/styles';

const {Navigator, Screen} = createBottomTabNavigator()


const TabRoutes: React.FC = () => {
  return (
      <Navigator 
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 60 : 0,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingHorizontal: 10,
          paddingTop: 15,
      },
      safeAreaInsets: {
        bottom: 0,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 30,
      },
      iconStyle: {
        flex: 0,
        width: 8,
        height: 50,
      },
      labelStyle: {
        fontSize: 12,
        marginLeft: -2
      },
        activeBackgroundColor: '#c2f4eb',
        activeTintColor: '#10d1a4',
        inactiveTintColor: '#c1bccc'
      }
      }>
        <Screen 
          name='Home' 
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) => (
              <Feather name='home' size={size} color={focused ? '#10d1a4' : color }/>
            ),
          }}
        />
        <Screen 
          name='Search' 
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) => (
              <Feather name='search' size={size} color={focused ? '#10d1a4' : color }/>
            )
          }}
        />
        <Screen 
          name='Cart' 
          component={Cart}
          options={{
            tabBarLabel: '',
            tabBarBadge: 3,
            tabBarIcon: ({color, size, focused}) => (
              <Feather name='shopping-bag' size={size} color={focused ? '#10d1a4' : color }/>
            )
          }}
        />
        <Screen 
          name='Profile' 
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) => (
              <Feather name='settings' size={size} color={focused ? '#10d1a4' : color }/>
            )
          }}
        />
      </Navigator>
  )
}

export default TabRoutes;