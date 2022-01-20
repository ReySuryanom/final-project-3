import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { MyText, Separator } from '../common/components';
import { Hotel } from '../features/destination';

export default function FavoriteStackScreen() {
  const { favHotels } = useSelector((state) => state.hotel);

  return (
    <View style={tw`p-4`}>
      <MyText style="text-4xl text-center mt-5 w-8/12 mx-auto" variant="bold">
        My Favorite Hotels
      </MyText>
      <FlatList
        data={favHotels}
        style={tw.style(`mt-5`, { overflow: 'visible' })}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <Separator vertical />}
        renderItem={({ item }) => (
          <Hotel
            id={item.id}
            image={item.image}
            city={item.city}
            country={item.country}
            rating={item.rating}
            name={item.name}
            price={item.price}
          />
        )}
      />
    </View>
  );
}
