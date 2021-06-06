import * as React from 'react';
import Svg, { Defs, Path, G, Mask, Use } from 'react-native-svg';

function Heart() {
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
          <Path d='M28.5 15c-1.74 0-3.41.81-4.5 2.09-1.09-1.28-2.76-2.09-4.5-2.09-3.08 0-5.5 2.42-5.5 5.5 0 3.78 3.4 6.86 8.55 11.54L24 33.35l1.45-1.32C30.6 27.36 34 24.28 34 20.5c0-3.08-2.42-5.5-5.5-5.5zm-4.4 15.55l-.1.1-.1-.1C19.14 26.24 16 23.39 16 20.5c0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' />
        </G>
      </G>
    </Svg>
  );
}

export default Heart;
