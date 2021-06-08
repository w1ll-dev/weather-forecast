import * as React from 'react';
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
  CardButton,
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

function CityCurrentWeatherCard({
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
    <WeatherWrapper style={boxShadow}>
      <CardColumn leftColumn={true}>
        <CardButton onPress={onPress} activeOpacity={onPress ? 0.8 : 1}>
          <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subTitle}</CardSubtitle>
          </CardContainer>
          <CardContainer>
            <WeatherDescription>{weatherDescription}</WeatherDescription>
            <TemperatureRange>{`${minTemp}º - ${maxTemp}º`}</TemperatureRange>
          </CardContainer>
        </CardButton>
      </CardColumn>
      <CardColumn leftColumn={false}>
        <Temperature>{`${temperature}º`}</Temperature>
        {typeof isFavorite == 'boolean' && (
          <TouchableOpacity
            onPress={addCityToFavorites}
            style={{ position: 'relative' }}
          >
            {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
          </TouchableOpacity>
        )}
      </CardColumn>
    </WeatherWrapper>
  );
}

export default CityCurrentWeatherCard;
