import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import Routes from './src/routes'
import ModalizeContext from './src/components/BottomSheet'
import store from './src/store/redux';

export default function App() {
  return (
    <Provider store={store}>
      <ModalizeContext>
        <StatusBar style='dark'/>
        <Routes/>
      </ModalizeContext>
    </Provider>
  );
}
