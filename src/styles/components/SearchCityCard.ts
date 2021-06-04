import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { horizontalPixel, verticalPixel } from '../../hooks/pixelConvert';
import { colors } from '../colors';
import { fonts } from '../fonts';

export const Wrapper = styled.View`
  height: ${verticalPixel(130)}px;
  margin-bottom: ${verticalPixel(16)}px;
  padding: ${verticalPixel(15)}px ${horizontalPixel(16)}px;
  background-color: ${colors.white};
  justify-content: space-between;
  border-radius: ${verticalPixel(5)}px;
`;

export const CityInfo = styled.View``;

export const CityLabel = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.dark87};
  font-size: ${verticalPixel(24)}px;
`;

export const CountryLabel = styled.Text`
  font-family: ${fonts.text};
  color: ${colors.dark87};
  font-size: ${verticalPixel(14)}px;
`;

export const AddCityButton = styled.TouchableOpacity`
  width: ${horizontalPixel(124)}px;
  height: ${verticalPixel(36)}px;
  align-items: center;
  justify-content: center;
  margin-left: ${horizontalPixel(-8)}px;
  margin-bottom: ${horizontalPixel(-8)}px;
  background-color: ${colors.white};
`;

export const AddCityLabel = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.blue};
  font-size: ${verticalPixel(14)}px;
  text-align: center;
  letter-spacing: ${verticalPixel(1.25)}px;
  line-height: ${verticalPixel(16)}px;
`;

export const { boxShadow } = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
