import tw from 'twrnc';
import { ScrollView, View } from 'react-native';
import { SearchFormInput } from '../features/search';
import { Destinations } from '../features/destination';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 p-5`}>
      <View style={{ flex: 0.965 }}>
        <SearchFormInput searchButton />
        <ScrollView>
          <Destinations category="Top" />
          <Destinations category="Popular" />
        </ScrollView>
      </View>
    </View>
  );
}
