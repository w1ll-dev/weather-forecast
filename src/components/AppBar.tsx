import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { pages, pt } from '../constants';
import { Title, Wrapper, SearchIcon } from '../styles/components/AppBar';

export default function AppBar() {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate(pages.SEARCH);
  }

  return (
    <Wrapper>
      <Title>{pt.appBarTitle}</Title>
      <TouchableOpacity onPress={handleClick}>
        <SearchIcon />
      </TouchableOpacity>
    </Wrapper>
  );
}
