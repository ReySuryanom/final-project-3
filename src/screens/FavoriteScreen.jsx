import { View, FlatList } from 'react-native';
import tw from 'twrnc';
import { MyText, Separator } from '../common/components';
import { Hotel } from '../features/destination';

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

export default function FavoriteStackScreen() {
  return (
    <View style={tw`p-4`}>
      <MyText style="text-4xl text-center mt-5 w-8/12 mx-auto" variant="bold">
        My Favorite Hotels
      </MyText>
      <FlatList
        data={data}
        style={tw.style(`mt-5`, { overflow: 'visible' })}
        // eslint-disable-next-line react/no-unstable-nested-components
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
  );
}
