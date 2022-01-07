import tw from 'twrnc';
import { Button, ScrollView, Text, View } from 'react-native';
import { BottomTab } from '../common/components';
import { SearchFormInput } from '../features/search';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 relative`}>
      <View style={{ flex: 0.91 }}>
        <SearchFormInput />
        <ScrollView style={tw.style(`bg-white p-5`)}>
          <Text style={tw`text-red-500 p-1`}>Test Home nfih</Text>
          <Button title="Oyy" />
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
          <View>
            <Text>F</Text>
            <Text>F</Text>
            <Text>F</Text>
          </View>
        </ScrollView>
      </View>

      <BottomTab />
    </View>
  );
}
