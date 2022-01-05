import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default function useAnimation(initialValue) {
  const endValue = initialValue === 0 ? 1 : 0;

  const animationValueRef = useRef(new Animated.Value(initialValue));

  const setup = (config) =>
    Animated.timing(animationValueRef.current, {
      toValue: endValue,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.quad),
      ...config,
    });

  return {
    value: animationValueRef.current,
    setup,
  };
}
