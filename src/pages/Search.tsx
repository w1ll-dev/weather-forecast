import React, { useState } from 'react';
import { Container } from '../styles/components/Common';
import { Content } from '../styles/pages/Search';
import { SearchCityCard, SearchInput } from '../components';
import { pt } from '../constants/translate';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export function Search() {
  const [textSearch, setTextSearch] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <SearchInput
          placeholder={pt.searchCityInputPlaceHolder}
          onChangeText={setTextSearch}
          blurOnSubmit={true}
          value={textSearch}
        />
        <Content>
          <SearchCityCard cityName={'Fortaleza'} country={'Brasil'} />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
