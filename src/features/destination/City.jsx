import tw from 'twrnc';
import { TouchableOpacity, Image } from 'react-native';
import { MyText } from '../../common/components';

export default function City({ city, image }) {
  return (
    <TouchableOpacity style={tw`relative`} activeOpacity={0.5}>
      <Image style={tw`w-56 h-56 rounded-3xl`} source={{ uri: image }} />
      <MyText
        style="text-white text-2xl absolute bottom-0 pb-2 pl-5 w-full rounded-b-2xl"
        variant="bold"
      >
        {city}
      </MyText>
    </TouchableOpacity>
  );
}
