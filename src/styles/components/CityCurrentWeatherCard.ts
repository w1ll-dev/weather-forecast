import styled from 'styled-components/native';
import { colors, fonts } from '..';
import { horizontalPixel, verticalPixel } from '../../hooks/pixelConvert';
import { Wrapper } from './SearchCityCard';

export const WeatherWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: space-between;
`;

interface CardColumnProps {
  leftColumn: boolean;
}

export const CardColumn = styled.View<CardColumnProps>`
  justify-content: space-between;
  align-items: ${({ leftColumn }) => (leftColumn ? 'flex-start' : 'flex-end')};
`;

export const WeatherDescription = styled.Text`
  font-size: ${verticalPixel(14)}px;
  font-family: ${fonts.text};
  color: ${colors.orange};
`;

export const TemperatureRange = styled.Text`
  font-size: ${verticalPixel(12)}px;
  font-family: ${fonts.text};
  color: ${colors.dark87};
`;

export const Temperature = styled.Text`
  font-size: ${verticalPixel(34)}px;
  font-family: ${fonts.heading};
  color: ${colors.orange};
  margin-top: ${verticalPixel(7)}px;
`;

export const CardButton = styled.TouchableOpacity`
  justify-content: space-between;
  flex-grow: 1;
  width: ${horizontalPixel(245)}px;
`;
