/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Text, View } from 'react-native';
import tw from 'twrnc';
import { Separator } from '../../common/components';
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

function Destinations({ category }) {
  return (
    <View style={tw`mb-5`}>
      <Text style={tw`font-bold text-[#282828] text-2xl uppercase`}>{category} Destinations</Text>
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

export default Destinations;
