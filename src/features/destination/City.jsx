import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

export default function City({ city, image }) {
  return (
    <View style={tw`relative overflow-hidden`}>
      <Image style={tw`w-44 h-44 rounded-2xl`} source={{ uri: image }} />
      <Text
        style={tw`font-bold text-white text-2xl absolute bottom-0 pb-1 pl-2.5 w-full rounded-b-2xl`}
      >
        {city}
      </Text>
    </View>
  );
}
