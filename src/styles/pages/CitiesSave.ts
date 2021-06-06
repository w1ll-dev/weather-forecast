import styled from 'styled-components/native';
import { colors, fonts } from '..';
import { horizontalPixel, verticalPixel } from '../../hooks/pixelConvert';

export const EmptyListContainer = styled.View`
  margin-top: ${verticalPixel(60)}px;
  justify-content: space-between;
`;

export const EmptyListTitle = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${verticalPixel(20)}px;
  color: ${colors.dark87};
  letter-spacing: ${horizontalPixel(0.25)}px;
  text-align: center;
`;

export const EmptyListMessage = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${verticalPixel(16)}px;
  letter-spacing: ${horizontalPixel(0.15)}px;
  line-height: ${verticalPixel(24)}px;
  margin-top: ${verticalPixel(16)}px;
  color: ${colors.dark60};
  text-align: center;
`;
