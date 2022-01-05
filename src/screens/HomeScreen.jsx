import tw from 'twrnc';
import { useCallback, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { BottomTab } from '../common/components';
import { SearchFormInput } from '../features/search';

export default function HomeScreen() {
  const [translateY, setTranslateY] = useState(355);

  const toggleSearch = useCallback(
    (value) => setTranslateY(value || (translateY ? 0 : 355)),
    [translateY]
  );

  return (
    <View style={tw`flex-1 relative`}>
      <View style={{ flex: 0.91 }}>
        <ScrollView style={tw.style(`bg-red-500`)}>
          <Text style={tw`text-red-500 p-1`}>Test Home nfih</Text>
          <Button title="Oyy" onPress={() => toggleSearch(355)} />
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
        <SearchFormInput translateY={translateY} toggleSearch={toggleSearch} />
      </View>

      <BottomTab />
    </View>
  );
}
