/* eslint-disable react/no-unstable-nested-components */
import { FlatList, View } from 'react-native';
import tw from 'twrnc';
import { MyText, Separator } from '../../common/components';
import City from './City';

const data = [
  {
    id: 1,
    img: 'https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg',
    city: 'Chile',
  },
  {
    id: 2,
    img: 'https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg',
    city: 'Chile',
  },
  {
    id: 3,
    img: 'https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg',
    city: 'Chile',
  },
  {
    id: 4,
    img: 'https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg',
    city: 'Chile',
  },
];

export default function Destinations({ category }) {
  return (
    <View style={tw`mt-5`}>
      <MyText style="text-[#282828] text-3xl capitalize" variant="bold">
        {category} Destinations
      </MyText>
      <FlatList
        style={tw`py-2`}
        data={data}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => <City image={item.img} city={item.city} />}
        horizontal
      />
    </View>
  );
}
