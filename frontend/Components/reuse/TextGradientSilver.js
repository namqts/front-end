import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useHeaderHeight} from '@react-navigation/elements';

export default function TextGradientSilver({children, style}) {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      useAngle={true}
      angle={270}
      locations={[0.0, 0.07, 0.34, 0.5, 0.66, 0.93, 1.0]}
      colors={[
        '#525967',
        '#AAAEB6',
        '#AAAEB6',
        '#AAAEB6',
        '#AAAEB6',
        '#AAAEB6',
        '#585F6C',
      ]}
      style={style}>
      {children}
    </LinearGradient>
  );
}
