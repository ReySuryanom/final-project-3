import tw from 'twrnc';
import { ScrollView, View } from 'react-native';
import { SearchFormInput } from '../features/search';
import { Destinations } from '../features/destination';
import { popularDestinatons, topDestinatons } from '../common/constant';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 p-5`}>
      <View style={{ flex: 0.965 }}>
        <SearchFormInput searchButton />
        <ScrollView>
          <Destinations category="Top" data={topDestinatons} />
          <Destinations category="Popular" data={popularDestinatons} />
        </ScrollView>
      </View>
    </View>
  );
}
