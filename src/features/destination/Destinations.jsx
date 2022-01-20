/* eslint-disable react/no-unstable-nested-components */
import tw from 'twrnc';
import { FlatList, View } from 'react-native';
import { MyText, Separator } from '../../common/components';
import City from './City';

export default function Destinations({ data, category }) {
  return (
    <View style={tw`mt-5`}>
      <MyText style="text-[#282828] text-3xl capitalize" variant="bold">
        {category} Destinations
      </MyText>
      <FlatList
        style={tw`py-2`}
        data={data}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => <City id={item.id} image={item.image} city={item.name} />}
        horizontal
      />
    </View>
  );
}
