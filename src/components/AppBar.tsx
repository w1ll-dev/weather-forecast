import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { pt } from '../constants';
import { Title, Wrapper, SearchIcon } from '../styles/components/AppBar';

export default function AppBar() {
  return (
    <Wrapper>
      <Title>{pt.appBarTitle}</Title>
      <TouchableOpacity>
        <SearchIcon />
      </TouchableOpacity>
    </Wrapper>
  );
}
