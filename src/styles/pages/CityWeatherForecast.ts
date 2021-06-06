import styled from 'styled-components/native';
import { colors, fonts } from '..';
import { horizontalPixel, verticalPixel } from '../../hooks/pixelConvert';

export const WeatherForecastMessage = styled.Text`
  font-family: ${fonts.text};
  color: ${colors.dark87};
  font-size: ${verticalPixel(12)}px;
  text-align: center;
  margin-top: ${verticalPixel(16)}px;
  line-height: ${verticalPixel(16)}px;
  letter-spacing: ${horizontalPixel(0.4)}px;
`;
