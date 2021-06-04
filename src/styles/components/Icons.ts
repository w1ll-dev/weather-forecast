import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { horizontalPixel } from '../../hooks/pixelConvert';
import { colors } from '../colors';

export const CloseIcon = styled(AntDesign).attrs(() => ({
  name: 'close',
  size: 20,
  color: colors.light,
}))`
  padding: 0 ${horizontalPixel(10)}px;
`;
