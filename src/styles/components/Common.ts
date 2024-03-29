import styled from 'styled-components/native';
import { verticalPixel } from '../../hooks/pixelConvert';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${verticalPixel(16)}px;
`;
