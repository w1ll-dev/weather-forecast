import AppLoading from 'expo-app-loading';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import AppBar from '../components/AppBar';
import { CityCurrentWeatherCard } from '../components/CityCurrentWeatherCard';
import { PlaceAutocomplete, pt } from '../constants';
import usePlacesSaved from '../hooks/usePlacesSaved';
import { Container, Content } from '../styles/components/Common';
import {
  EmptyListContainer,
  EmptyListTitle,
  EmptyListMessage,
} from '../styles/pages/CitiesSave';

export function CitiesSave() {
  const { placesSaved, isLoadingFromStorage, changeFavoriteStatus } =
    usePlacesSaved();

  return (
    <Container>
      <AppBar />
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
                  addCityToFavorites={async () =>
                    await changeFavoriteStatus(item)
                  }
                  cityName={city}
                  country={country}
                  weatherDescription={description}
                  minTemp={minTemp}
                  maxTemp={maxTemp}
                  temperature={dayTemp}
                  isFavorite={isFavorite}
                />
              );
            }}
          />
        )}
      </Content>
    </Container>
  );
}
