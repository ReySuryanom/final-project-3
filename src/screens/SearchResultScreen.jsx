/* eslint-disable react/no-unstable-nested-components */
import { FlatList, View } from 'react-native';
import tw from 'twrnc';
import { Separator } from '../common/components';
import { Hotel } from '../features/destination';
import { SearchFormInput } from '../features/search';

const data = [
  {
    id: 1,
    img: 'https://exp.cdn-hotels.com/hotels/23000000/22580000/22575700/22575611/29fa5a77_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    city: 'Jakarta',
    rating: 4.5,
    name: 'Alila SCBD',
    price: 290,
  },
  {
    id: 2,
    img: 'https://exp.cdn-hotels.com/hotels/23000000/22580000/22575700/22575611/29fa5a77_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    city: 'Jakarta',
    rating: 4.5,
    name: 'Alila SCBD',
    price: 290,
  },
  {
    id: 3,
    img: 'https://exp.cdn-hotels.com/hotels/23000000/22580000/22575700/22575611/29fa5a77_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    city: 'Jakarta',
    rating: 4.5,
    name: 'Alila SCBD',
    price: 290,
  },
];

export default function SearchResultScreen() {
  return (
    <View style={tw`flex-1 pb-5`}>
      <View style={{ flex: 0.965 }}>
        <SearchFormInput style="mx-5 mt-5" />
        <FlatList
          data={data}
          contentContainerStyle={tw`p-5 pt-0`}
          style={tw.style(`mt-5`, { overflow: 'visible' })}
          ItemSeparatorComponent={() => <Separator vertical />}
          renderItem={({ item }) => (
            <Hotel
              image={item.img}
              city={item.city}
              rating={item.rating}
              name={item.name}
              price={item.price}
            />
          )}
        />
      </View>
    </View>
  );
}
