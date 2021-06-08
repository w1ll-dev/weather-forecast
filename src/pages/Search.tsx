import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Container, Content } from '../styles/components/Common';
import { SearchCityCard, SearchInput } from '../components';
import { pt } from '../constants/translate';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { savePlaceOnStorage } from '../libs';
import { usePlacesAutocomplete } from '../hooks';

function Search() {
  const { searchValue, setSearchValue, places } = usePlacesAutocomplete();
  const navigation = useNavigation();

  function handleClear() {
    setSearchValue('');
    navigation.goBack();
  }

  async function handleSavePlace(cityPlaceId: string) {
    const citySelected = places.filter(
      (city) => cityPlaceId === city.place_id
    )[0];
    await savePlaceOnStorage(citySelected);
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <SearchInput
            autoFocus={true}
            placeholder={pt.searchCityInputPlaceHolder}
            onChangeText={setSearchValue}
            blurOnSubmit={true}
            value={searchValue}
            handleClear={handleClear}
          />
          <Content>
            <FlatList
              data={places}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              keyExtractor={({ place_id }) => place_id}
              initialNumToRender={12}
              maxToRenderPerBatch={12}
              windowSize={5}
              renderItem={({ item }) => (
                <SearchCityCard
                  cityName={item.city}
                  country={item.country}
                  key={item.place_id}
                  saveCity={() => handleSavePlace(item.place_id)}
                />
              )}
            />
          </Content>
        </>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default Search;
