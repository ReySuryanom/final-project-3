import tw from 'twrnc';
import { Image, Button, ScrollView, Text, View } from 'react-native';
import { BottomTab } from '../common/components';
import { SearchFormInput } from '../features/search';

export default function HomeScreen({ navigation }) {
  return (
    <View style={tw`flex-1 relative bg-white`}>
      <View style={{ flex: 0.93 }}>
        <Button title="F" onPress={() => navigation.navigate('SearchResultScreen')} />
        <SearchFormInput />
        <ScrollView style={tw`bg-white px-5`}>
          <View>
            <Text style={tw`font-bold text-3xl uppercase`}>Top Destinations</Text>
            <View style={tw`flex-row`}>
              <View style={tw`relative overflow-hidden`}>
                <Image
                  style={tw.style(`w-44 h-44 rounded-2xl`)}
                  source={{
                    uri: 'https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg',
                  }}
                />
                <Text
                  style={tw`font-bold text-white text-2xl absolute bottom-0 pb-1 pl-2.5 w-full rounded-b-2xl`}
                >
                  Chile
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomTab />
    </View>
  );
}
