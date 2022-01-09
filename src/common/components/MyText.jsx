import { Text } from 'react-native';
import tw from 'twrnc';

export default function MyText({ style, children, variant = 'regular' }) {
  const font = {
    light: 'ubuntu-light',
    regular: 'ubuntu-regular',
    medium: 'ubuntu-medium',
    bold: 'ubuntu-bold',
  };
  return <Text style={tw.style(style, { fontFamily: font[variant] })}>{children}</Text>;
}
