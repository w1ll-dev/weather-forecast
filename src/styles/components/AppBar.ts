import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '..';
import { horizontalPixel, verticalPixel } from '../../hooks/pixelConvert';

export const Wrapper = styled.View`
  height: ${verticalPixel(56)}px;
  background-color: ${colors.lightBlue};
  padding: ${horizontalPixel(16)}px ${verticalPixel(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.white};
  font-size: ${verticalPixel(20)}px;
`;

export const SearchIcon = styled(Ionicons).attrs(() => ({
  name: 'search-sharp',
  size: 20,
  color: colors.light,
}))`
  margin-right: ${horizontalPixel(3.5)}px;
  font-family: ${fonts.heading};
  color: ${colors.white};
  font-size: ${verticalPixel(20)}px;
`;
