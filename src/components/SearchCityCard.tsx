import React from 'react';
import {
  Wrapper,
  CardTitle,
  CardSubtitle,
  AddCityButton,
  AddCityLabel,
  CardContainer,
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
      <CardContainer>
        <CardTitle>{cityName}</CardTitle>
        <CardSubtitle>{country}</CardSubtitle>
      </CardContainer>
      <AddCityButton onPress={saveCity}>
        <AddCityLabel>{pt.addCityLabel}</AddCityLabel>
      </AddCityButton>
    </Wrapper>
  );
}
