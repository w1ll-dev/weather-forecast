import React from 'react';
import {
  Wrapper,
  CityLabel,
  CountryLabel,
  CityInfo,
  boxShadow,
} from '../styles/components/SearchCityCard';

interface CityCurrentWeatherCardProps {
  cityName: string;
  country: string;
}

export function CityCurrentWeatherCard({
  cityName,
  country,
}: CityCurrentWeatherCardProps) {
  return (
    <Wrapper style={boxShadow}>
      <CityInfo>
        <CityLabel>{cityName}</CityLabel>
        <CountryLabel>{country}</CountryLabel>
      </CityInfo>
    </Wrapper>
  );
}
