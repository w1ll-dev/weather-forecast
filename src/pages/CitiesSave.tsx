import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import AppBar from '../components/AppBar';
import { CityCurrentWeatherCard } from '../components/CityCurrentWeatherCard';
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
            renderItem={({ item }: { item: PlaceAutocomplete }) => (
              <CityCurrentWeatherCard
                cityName={item.city}
                country={item.country}
                weatherDescription={item.placeWeatherForecast[0].description}
                minTemp={item.placeWeatherForecast[0].minTemp}
                maxTemp={item.placeWeatherForecast[0].maxTemp}
                temperature={item.placeWeatherForecast[0].dayTemp}
              />
            )}
          />
        )}
      </Content>
    </Container>
  );
}
