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

interface TitleProps {
  hasLeftAction: boolean;
}

export const Title = styled.Text<TitleProps>`
  flex: 1;
  font-family: ${fonts.heading};
  color: ${colors.white};
  font-size: ${verticalPixel(20)}px;
  margin-left: ${({ hasLeftAction }) =>
    hasLeftAction ? horizontalPixel(35) : 0}px;
`;

export const SearchIcon = styled(Ionicons).attrs(() => ({
  name: 'search-sharp',
  size: 20,
  color: colors.light,
}))`
  margin-right: ${horizontalPixel(3.5)}px;
`;

export const BackIcon = styled(Ionicons).attrs(() => ({
  name: 'chevron-back-sharp',
  size: 20,
  color: colors.light,
}))`
  margin-left: ${horizontalPixel(8)}px;
`;
