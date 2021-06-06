import React from 'react';
import {
  CityLabel,
  CountryLabel,
  CityInfo,
  boxShadow,
} from '../styles/components/SearchCityCard';
import {
  WeatherWrapper,
  WeatherDescription,
  CardColumn,
  TemperatureRange,
  Temperature,
} from '../styles/components/CityCurrentWeatherCard';
import HeartFillIcon from './svg/HeartFill';
import HeartIcon from './svg/Heart';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CityCurrentWeatherCardProps {
  cityName: string;
  country: string;
  weatherDescription: string;
  minTemp: number;
  maxTemp: number;
  temperature: number;
  addCityToFavorites: any;
  isFavorite: boolean;
}

export function CityCurrentWeatherCard({
  cityName,
  country,
  weatherDescription,
  minTemp,
  maxTemp,
  temperature,
  addCityToFavorites,
  isFavorite,
}: CityCurrentWeatherCardProps) {
  return (
    <WeatherWrapper style={boxShadow}>
      <CardColumn>
        <CityInfo>
          <CityLabel>{cityName}</CityLabel>
          <CountryLabel>{country}</CountryLabel>
        </CityInfo>
        <CityInfo>
          <WeatherDescription>{weatherDescription}</WeatherDescription>
          <TemperatureRange>{`${minTemp}º - ${maxTemp}º`}</TemperatureRange>
        </CityInfo>
      </CardColumn>
      <CardColumn>
        <Temperature>{`${temperature}º`}</Temperature>
        <TouchableOpacity onPress={addCityToFavorites}>
          {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
        </TouchableOpacity>
      </CardColumn>
    </WeatherWrapper>
  );
}
