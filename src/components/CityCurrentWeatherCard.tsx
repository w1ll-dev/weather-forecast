import React from 'react';
import {
  CardTitle,
  CardSubtitle,
  CardContainer,
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
  title: string;
  subTitle: string;
  weatherDescription: string;
  minTemp: number;
  maxTemp: number;
  temperature: number;
  addCityToFavorites?: any;
  isFavorite?: boolean;
  onPress?: any;
}

export function CityCurrentWeatherCard({
  title,
  subTitle,
  weatherDescription,
  minTemp,
  maxTemp,
  temperature,
  addCityToFavorites,
  isFavorite,
  onPress,
}: CityCurrentWeatherCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.8 : 1}>
      <WeatherWrapper style={boxShadow}>
        <CardColumn leftColumn={true}>
          <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subTitle}</CardSubtitle>
          </CardContainer>
          <CardContainer>
            <WeatherDescription>{weatherDescription}</WeatherDescription>
            <TemperatureRange>{`${minTemp}º - ${maxTemp}º`}</TemperatureRange>
          </CardContainer>
        </CardColumn>
        <CardColumn leftColumn={false}>
          <Temperature>{`${temperature}º`}</Temperature>
          {typeof isFavorite == 'boolean' && (
            <TouchableOpacity onPress={addCityToFavorites}>
              {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
            </TouchableOpacity>
          )}
        </CardColumn>
      </WeatherWrapper>
    </TouchableOpacity>
  );
}
