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
import HeartIcon from './svg/HeartFill';
import { Text } from 'react-native';

interface CityCurrentWeatherCardProps {
  cityName: string;
  country: string;
  weatherDescription: string;
  minTemp: number;
  maxTemp: number;
  temperature: number;
}

export function CityCurrentWeatherCard({
  cityName,
  country,
  weatherDescription,
  minTemp,
  maxTemp,
  temperature,
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
        <HeartIcon />
      </CardColumn>
    </WeatherWrapper>
  );
}
