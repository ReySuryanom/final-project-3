import tw from 'twrnc';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { MyText } from '../../common/components';

export default function Hotel({ image, city, rating, name, price }) {
  return (
    <View style={tw`flex-row p-3 rounded-3xl shadow-md w-full bg-white`}>
      <Image style={tw`w-32 h-32 rounded-2xl`} source={{ uri: image }} />
      <View style={tw`flex-1 pl-5 justify-center relative`}>
        <MyText style="text-2xl text-[#282828]" variant="bold">
          {name} Hotels
        </MyText>
        <View style={tw`items-center flex-row`}>
          <Icon
            size={20}
            containerStyle={tw`mr-1.5`}
            name="location"
            type="ionicon"
            color="#2C9CDB"
          />
          <MyText style="text-lg text-gray-500">{city}</MyText>
        </View>
        <View style={tw`items-center flex-row`}>
          <Icon size={20} containerStyle={tw`mr-1.5`} name="star" type="ionicon" color="#F2CC00" />
          <MyText style="text-xl text-[#282828]" variant="bold">
            {rating}
          </MyText>
        </View>
        <MyText style="text-2xl text-[#2C9CDB] mt-2" variant="bold">
          ${price}
          <MyText style="text-lg text-[#282828]">/night</MyText>
        </MyText>
        <Icon
          size={18}
          containerStyle={tw`absolute bottom-0 right-0`}
          name="bookmark"
          type="ionicon"
          color="#2C9CDB"
          reverse
        />
      </View>
    </View>
  );
}
