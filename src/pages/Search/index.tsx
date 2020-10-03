import React, { useEffect, useState } from 'react';
import {Feather} from '@expo/vector-icons'
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';

import FilteredSearch from '../../components/FilteredSearch';

import { 
  Container, 
  Header,
  Title,
  SearchContainer,
  SearchInput,
  CategoriesList,
  CategoriesListButton,
  CategoriesListButtonText,
  Border,
} from './styles';
import api from '../../services/api';

interface CategoriesListData {
  id: number;
  CategoryName: string;
}

const Search: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesListData[]>([])

  useEffect(() => {
    api.get('Categories').then(response => {
      setCategories(response.data)
    })
  }, [])

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
        <CategoriesList 
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem= {({item}) => (
            <>
              <CategoriesListButton>
                <CategoriesListButtonText>{item.CategoryName}</CategoriesListButtonText>
              </CategoriesListButton>
              <Border />
            </>
          )}
        />
        <ScrollView
          horizontal
          snapToInterval={375}
          showsHorizontalScrollIndicator={false}
          decelerationRate= {0}
        >
          <FilteredSearch />
          <FilteredSearch />
          <FilteredSearch />
          <FilteredSearch />
          <FilteredSearch />
        </ScrollView>
    </Container>
  );
}

export default Search;