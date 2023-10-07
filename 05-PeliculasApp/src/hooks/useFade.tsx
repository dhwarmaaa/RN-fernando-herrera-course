import React, {useRef} from 'react';
import {Animated} from 'react-native';

const useFade = () => {
  // cuando se crea el componente, se crea una opacidad en 0
  const opacity = useRef(new Animated.Value(0)).current;

  // aqui la opacidad se va incrementando hasta 1
  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return {opacity, fadeIn, fadeOut};
};

export default useFade;
