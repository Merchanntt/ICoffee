import React from 'react';
import {Feather} from '@expo/vector-icons'

import { 
  Container, 
  Header,
  Title,
  SearchContainer,
  SearchInput,
} from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

const Search: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Buscar</Title>
        <SearchContainer>
          <Feather name='search' size={20} color='#88888a'/>
          <SearchInput 
            placeholder='Encontre seu café'
            placeholderTextColor='#88888a'
          />
          <BorderlessButton>
            <Feather name='coffee' size={20} color='#10d1a4'/>
          </BorderlessButton>
        </SearchContainer>
      </Header>
    </Container>
  );
}

export default Search;