import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import AppBar from '../components/AppBar';
import { CityCurrentWeatherCard } from '../components/CityCurrentWeatherCard';
import { PlaceAutocomplete, pt } from '../constants';
import { PlaceWeatherForecastProtocol } from '../constants/protocols';
import { Container, Content } from '../styles/components/Common';
import { WeatherForecastMessage } from '../styles/pages/CityWeatherForecast';

export function CityWeatherForecast() {
  const route = useRoute();
  const navigation = useNavigation();

  const place = route.params as PlaceAutocomplete;

  return (
    <Container>
      <AppBar title={place.city} leftAction={navigation.goBack} />
      <WeatherForecastMessage>
        {pt.weatherForecastMessage}
      </WeatherForecastMessage>
      <Content>
        <FlatList
          data={place.placeWeatherForecast}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={({ dateTime }) => `${dateTime}`}
          renderItem={({ item }: { item: PlaceWeatherForecastProtocol }) => {
            const {
              weekDay,
              monthDate,
              dayTemp,
              description,
              minTemp,
              maxTemp,
            } = item;

            return (
              <CityCurrentWeatherCard
                title={weekDay}
                subTitle={monthDate}
                weatherDescription={description}
                minTemp={minTemp}
                maxTemp={maxTemp}
                temperature={dayTemp}
              />
            );
          }}
        />
      </Content>
    </Container>
  );
}
