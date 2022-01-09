import tw from 'twrnc';
import { ScrollView, View } from 'react-native';
import { SearchFormInput } from '../features/search';
import { Destinations } from '../features/destination';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 relative bg-white`}>
      <View style={{ flex: 0.93 }}>
        <SearchFormInput searchButton />
        <ScrollView style={tw`bg-white px-5`}>
          <Destinations category="Top" />
          <Destinations category="Popular" />
        </ScrollView>
      </View>
    </View>
  );
}
