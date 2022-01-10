import tw from 'twrnc';
import {
  Button,
  ImageBackground,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Label, MyText } from '../common/components';

export default function DetailScreen({ route, navigation }) {
  const { id, city, image, name, price, rating } = route.params;

  return (
    <ImageBackground style={tw`flex-1 h-2/3 pt-80`} source={{ uri: image }}>
      <ScrollView style={tw`bg-white flex-1 rounded-t-3xl p-10`}>
        <View style={tw`flex-row justify-between`}>
          <MyText style="text-3xl text-[#1C222C]" variant="bold">
            {name}
          </MyText>
          <MyText style="text-3xl text-[#2C9CDB]" variant="bold">
            ${price}
          </MyText>
        </View>
        <Label name="location" color="#2C9CDB" text={city} style="text-lg text-gray-500" />
        <Label
          name="star"
          color="#F2CC00"
          text={rating}
          style="text-xl text-[#282828]"
          variant="bold"
        />
        <View>
          <MyText style="text-3xl text-[#1C222C]" variant="bold">
            About
          </MyText>
          <MyText style="text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere dolor quos sequi
            nobis corporis id deleniti error quibusdam totam, accusantium quaerat nesciunt dolorum
            culpa soluta fuga fugiat et ipsa!
          </MyText>
        </View>
        <View>
          <MyText style="text-3xl text-[#1C222C]" variant="bold">
            Facilities
          </MyText>
          {/* <FlatList data={} horizontal /> */}
        </View>
        <TouchableOpacity style={tw`rounded-full overflow-hidden mt-auto bg-black`}>
          <Button title="Bookmark" onPress={() => navigation.navigate('Booking')} />
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}
