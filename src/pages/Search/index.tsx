import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, ScrollView, ViewToken } from 'react-native';
import {Feather} from '@expo/vector-icons'
import api from '../../services/api';

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

interface CategoriesListData {
  id: number;
  CategoryName: string;
}

const Search: React.FC = () => {
  const scrollable = useRef<FlatList>(null)
  const categoryList = useRef<FlatList>(null)
  
  const [categories, setCategories] = useState<CategoriesListData[]>([])

  const [searchValue, setSearchValue] = useState('')

  const [isSelected, setSelected] = useState(0)
  const [isViewable, setIsViewable] = useState(0)

  useEffect(() => {
    api.get('Categories').then(response => {
      setCategories(response.data)
    })
  }, [])

  const handleIsSelectedCategory = useCallback((CategoryIndex: number) => {
      setSelected(CategoryIndex)
      scrollable.current?.scrollToIndex({animated: true, index: CategoryIndex}) 
      categoryList.current?.scrollToIndex({animated: true, index: CategoryIndex}) 
  }, [])

  const handleSetViewAble = useCallback(({viewableItems}) => {
    const objectedItems = viewableItems.pop()

    setIsViewable(objectedItems.index)
  }, [])

  const handleSetSelectedCategory = useCallback(() => {
    setSelected(isViewable)
    categoryList.current?.scrollToIndex({animated: true, index: isViewable}) 
  }, [isViewable])

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
          ref={categoryList}
          data={categories}
          decelerationRate= {0}
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
        <FlatList 
          ref={scrollable}
          data={categories}
          horizontal
          snapToInterval={Dimensions.get('window').width}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={handleSetViewAble}
          onTouchEnd={handleSetSelectedCategory}
          decelerationRate= {0}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
              <FilteredSearch 
                key={item.id}
                searchValue={searchValue} 
                categoryValue={item.CategoryName}
              />
            )
          }
        />
    </Container>
  );
}

export default Search;