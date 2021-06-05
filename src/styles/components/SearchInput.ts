import styled from 'styled-components/native';
import { colors } from '../colors';
import { fonts } from '../fonts';
import { AntDesign } from '@expo/vector-icons';
import { horizontalPixel, verticalPixel } from '../../hooks/pixelConvert';

export const StyledSearchInput = styled.TextInput`
  height: ${verticalPixel(56)}px;
  color: ${colors.light};
  background: ${colors.lightBlue};
  font-family: ${fonts.heading};
  font-size: ${verticalPixel(16)}px;
  margin-left: ${horizontalPixel(40)}px; ;
`;

export const Wrapper = styled.View`
  justify-content: center;
  background: ${colors.lightBlue};
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: ${horizontalPixel(10)}px;
`;

export const CloseIcon = styled(AntDesign).attrs(() => ({
  name: 'close',
  size: 20,
  color: colors.white,
}))``;
