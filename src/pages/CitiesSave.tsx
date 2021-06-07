import { useNavigation } from '@react-navigation/core';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { AppBar, dispatchCustomAlert } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import { CityCurrentWeatherCard } from '../components/CityCurrentWeatherCard';
import { pages, PlaceAutocomplete, pt } from '../constants';
import usePlacesSaved from '../hooks/usePlacesSaved';
import { Container, Content } from '../styles/components/Common';
import {
  EmptyListContainer,
  EmptyListTitle,
  EmptyListMessage,
} from '../styles/pages/CitiesSave';

export function CitiesSave() {
  const {
    placesSaved,
    isLoadingFromStorage,
    setPlaceToToggleFavorite,
    isConnected,
  } = usePlacesSaved();

  const navigation = useNavigation();

  function handleSelect(place: PlaceAutocomplete) {
    navigation.navigate(pages.CITY_WEATHER_FORECAST, place);
  }

  function handleAppBarClick() {
    if (!isConnected) return dispatchCustomAlert();
    navigation.navigate(pages.SEARCH);
  }

  return (
    <Container>
      <AppBar title={pt.appBarTitle} rightAction={handleAppBarClick} />
      <Content>
        {isLoadingFromStorage ? (
          <AppLoading autoHideSplash={false} />
        ) : placesSaved.length === 0 ? (
          <EmptyListContainer>
            <EmptyListTitle>{pt.emptyCitiesList.title}</EmptyListTitle>
            <EmptyListMessage>{pt.emptyCitiesList.message}</EmptyListMessage>
          </EmptyListContainer>
        ) : (
          <FlatList
            data={placesSaved}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={({ place_id }) => place_id}
            renderItem={({ item }: { item: PlaceAutocomplete }) => {
              const { city, country, isFavorite } = item;
              const { description, minTemp, maxTemp, dayTemp } =
                item.placeWeatherForecast[0];

              return (
                <CityCurrentWeatherCard
                  addCityToFavorites={() => setPlaceToToggleFavorite(item)}
                  title={city}
                  subTitle={country}
                  weatherDescription={description}
                  minTemp={minTemp}
                  maxTemp={maxTemp}
                  temperature={dayTemp}
                  isFavorite={isFavorite}
                  onPress={() => handleSelect(item)}
                />
              );
            }}
          />
        )}
      </Content>
    </Container>
  );
}
