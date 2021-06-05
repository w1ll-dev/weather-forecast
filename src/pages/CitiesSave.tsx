import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SearchCityCard } from '../components';
import AppBar from '../components/AppBar';
import { PlaceAutocomplete } from '../constants';
import { loadStoragePlaces } from '../libs';
import { getPlaceWeatherForecast } from '../repository';
import { Container, Content } from '../styles/components/Common';

export function CitiesSave() {
  const [placesSaved, setPlacesSaved] = useState<PlaceAutocomplete[]>([]);

  async function loadCities() {
    const placesSaved = await loadStoragePlaces();
    const placeWithCompleteInfoList = [];
    for (const place of placesSaved) {
      const placeWithCompleteInfo = await getPlaceWeatherForecast(place);
      placeWithCompleteInfoList.push(placeWithCompleteInfo);
    }
    setPlacesSaved(placeWithCompleteInfoList);
  }

  useEffect(() => {
    loadCities();
  }, []);

  return (
    <Container>
      <AppBar />
      <Content>
        {placesSaved.length === 0 ? (
          <AppLoading />
        ) : (
          <FlatList
            data={placesSaved}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={({ place_id }) => place_id}
            initialNumToRender={12}
            maxToRenderPerBatch={12}
            windowSize={5}
            renderItem={({ item }: { item: PlaceAutocomplete }) => (
              <SearchCityCard
                cityName={item.city}
                country={item.country}
                key={item.place_id}
                saveCity={() => {}}
              />
            )}
          />
        )}
      </Content>
    </Container>
  );
}
