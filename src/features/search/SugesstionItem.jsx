import tw from 'twrnc';
import { View, Text } from 'react-native';

export default function SugesstionItem({ list = [] }) {
  if (list.length === 1) {
    return (
      <View>
        <Text style={tw`font-bold text-red-500`}>{list[0]}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={tw`font-bold text-red-500`}>{list.shift()}</Text>
      <Text style={tw`font-thin text-black`}>{list.shift().trim() + list}</Text>
    </View>
  );
}
