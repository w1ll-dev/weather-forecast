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
}

export function SearchCityCard({ cityName, country }: SearchCityCardProps) {
  return (
    <Wrapper style={boxShadow}>
      <CityInfo>
        <CityLabel>{cityName}</CityLabel>
        <CountryLabel>{country}</CountryLabel>
      </CityInfo>
      <AddCityButton>
        <AddCityLabel>{pt.addCityLabel}</AddCityLabel>
      </AddCityButton>
    </Wrapper>
  );
}
