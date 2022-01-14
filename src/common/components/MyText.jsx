import { Text } from 'react-native';
import tw from 'twrnc';

export default function MyText({ style, action, children, variant = 'regular' }) {
  const font = {
    light: 'ubuntu-light',
    regular: 'ubuntu-regular',
    medium: 'ubuntu-medium',
    bold: 'ubuntu-bold',
  };
  return (
    <Text onPress={action} style={tw.style(style, { fontFamily: font[variant] })}>
      {children}
    </Text>
  );
}
