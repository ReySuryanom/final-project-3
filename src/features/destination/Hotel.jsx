import tw from 'twrnc';
import { View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Label, MyText } from '../../common/components';
import { addFavoriteHotels } from './destinationsSlice';
import { trim } from '../../common/helpers';

export default function Hotel({ id, image, city, country, rating, name, price }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goToDetailScreen = () =>
    navigation.navigate('DetailHotels', { id, image, city, country, rating, name, price });

  return (
    <View style={tw`relative shadow-md p-3 bg-white rounded-3xl w-full`}>
      <Icon
        onPress={() =>
          dispatch(addFavoriteHotels({ id, image, city, country, rating, name, price }))
        }
        size={18}
        containerStyle={tw`absolute bottom-2 right-4 z-10`}
        name="bookmark"
        type="ionicon"
        color="#2C9CDB"
        reverse
      />
      <TouchableOpacity style={tw`flex-row`} activeOpacity={0.5} onPress={goToDetailScreen}>
        <Image style={tw`w-32 h-32 rounded-2xl`} source={{ uri: image }} />
        <View style={tw`flex-1 pl-5 justify-center`}>
          <MyText style="text-2xl text-[#282828] overflow-hidden flex-1 flex-row" variant="bold">
            {name}
          </MyText>
          <Label
            name="location"
            color="#2C9CDB"
            text={`${country}, ${trim(city, 7)}`}
            style="text-lg text-gray-500 overflow-hidden flex-1 flex-row"
          />
          <Label
            name="star"
            color="#F2CC00"
            text={rating}
            style="text-xl text-[#282828]"
            variant="bold"
          />
          <MyText style="text-2xl text-[#2C9CDB] mt-2" variant="bold">
            ${price}
            <MyText style="text-lg text-[#282828]">/night</MyText>
          </MyText>
        </View>
      </TouchableOpacity>
    </View>
  );
}
