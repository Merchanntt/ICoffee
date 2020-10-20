import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes'
import ModalizeContext from './src/components/BottomSheet'


export default function App() {
  return (
    <ModalizeContext>
      <StatusBar style='dark'/>
      <Routes/>
    </ModalizeContext>
  );
}
