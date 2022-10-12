import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useHeaderHeight} from '@react-navigation/elements';

export default function GradientSilver({children, style}) {

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      useAngle={true}
      angle={180}
      locations={[0.0, 0.1615, 0.7031, 0.7656, 1.0]}
      colors={['#F8F8F8', '#B5B4B4', '#F1F1F1', '#504F4F', '#E6E6E6']}
      style={style}>
      {children}
    </LinearGradient>
  );
}
