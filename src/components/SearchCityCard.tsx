import React from 'react';
import {
  Wrapper,
  CityLabel,
  CountryLabel,
  AddCityButton,
  AddCityLabel,
  CityInfo,
  boxShadow,
} from '../styles/components/SearchCityCard';
import { pt } from '../constants/translate';

interface SearchCityCardProps {
  cityName: string;
  country: string;
  saveCity: any;
}

export function SearchCityCard({
  cityName,
  country,
  saveCity,
}: SearchCityCardProps) {
  return (
    <Wrapper style={boxShadow}>
      <CityInfo>
        <CityLabel>{cityName}</CityLabel>
        <CountryLabel>{country}</CountryLabel>
      </CityInfo>
      <AddCityButton onPress={saveCity}>
        <AddCityLabel>{pt.addCityLabel}</AddCityLabel>
      </AddCityButton>
    </Wrapper>
  );
}
