import * as React from 'react';
import Svg, { Defs, Path, G, Mask, Use } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={48} viewBox='0 0 48 48'>
      <Defs>
        <Path id='prefix__a' d='M0 0h48v48H0z' />
      </Defs>
      <G fill='none' fillRule='evenodd'>
        <Mask id='prefix__b' fill='#fff'>
          <Use xlinkHref='#prefix__a' />
        </Mask>
        <G fill='#ED0952' fillRule='nonzero' mask='url(#prefix__b)'>
          <Path d='M24 33.35l-1.45-1.32C17.4 27.36 14 24.28 14 20.5c0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L24 33.35z' />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
