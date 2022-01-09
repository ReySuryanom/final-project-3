import { View } from 'react-native';

export default function Separator({ vertical }) {
  return <View style={{ width: vertical ? '100%' : 20, height: vertical && 20 }} />;
}
