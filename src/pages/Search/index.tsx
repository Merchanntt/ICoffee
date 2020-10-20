import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import {Feather} from '@expo/vector-icons'

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
  GreenBorder,
  Border,
} from './styles';
import api from '../../services/api';

interface CategoriesListData {
  id: number;
  CategoryName: string;
}

const Search: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesListData[]>([])

  const [searchValue, setSearchValue] = useState('')
  const [isSelected, setSelected] = useState(0)

  useEffect(() => {
    api.get('Categories').then(response => {
      setCategories(response.data)
    })
  }, [])

  const handleIsSelectedCategory = useCallback((CategoryIndex: number) => {
      setSelected(CategoryIndex)
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
            value= {searchValue}
            onChangeText= {setSearchValue}
          />
            <Feather name='coffee' size={20} color='#10d1a4'/>
        </SearchContainer>
      </Header>
        <CategoriesList 
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem= {({item, index}) => (
            <>
              <CategoriesListButton 
                onPress={() => handleIsSelectedCategory(index)}>
                <CategoriesListButtonText
                  isSelected={index === isSelected}
                >{item.CategoryName}</CategoriesListButtonText>
                <GreenBorder isSelected={index === isSelected} />
              </CategoriesListButton>
            </>
          )}
        />
        <Border />
        <ScrollView
          horizontal
          snapToInterval={Dimensions.get('window').width}
          showsHorizontalScrollIndicator={false}
          decelerationRate= {0}
        >
          {categories.map(category => (
            <FilteredSearch key={category.id} searchValue={searchValue} categoryValue={category.CategoryName}/>
          ))}
        </ScrollView>
    </Container>
  );
}

export default Search;