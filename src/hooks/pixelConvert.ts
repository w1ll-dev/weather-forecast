import { Dimensions, PixelRatio } from 'react-native';

const layout = {
  width: 360,
  height: 640,
};

export function horizontalPixel(dpValue: number): number {
  const horizontal = (Dimensions.get('window').width / layout.width) * dpValue;
  return PixelRatio.roundToNearestPixel(horizontal);
}

export function verticalPixel(dpValue: number): number {
  const vertical = (Dimensions.get('window').height / layout.height) * dpValue;
  return PixelRatio.roundToNearestPixel(vertical);
}
