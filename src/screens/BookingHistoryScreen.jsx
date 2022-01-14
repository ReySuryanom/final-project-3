import { View, FlatList } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { MyText, Separator } from '../common/components';
import { Hotel } from '../features/destination';
import LoginScreen from './LoginScreen';

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

export default function BookingHistoryScreen() {
  const { isUserLoggedIn, user } = useSelector((state) => state.auth);

  if (!isUserLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <View style={tw`p-5`}>
      <View style={tw`bg-white p-3 rounded-t-xl shadow-md`}>
        <View style={tw`flex-row items-center `}>
          <Icon type="ionicon" name="person" color="#2C9CDB" size={40} reverse />
          <View style={tw`flex-1 mx-auto`}>
            <MyText style="text-3xl text-center" variant="bold">
              {user.firstName}
            </MyText>
            <MyText style="text-center text-gray-500">{user.email}</MyText>
          </View>
        </View>
        <Divider style={tw`mt-5`} width={1} />
        <View style={tw`items-center flex-row justify-around`}>
          <View style={tw`items-center`}>
            <MyText style="text-gray-500 text-lg" variant="medium">
              Bookings
            </MyText>
            <MyText style="text-[#2C9CDB] text-xl" variant="medium">
              2
            </MyText>
          </View>
          <View style={tw`items-center`}>
            <MyText style="text-gray-500 text-lg" variant="medium">
              Favorites
            </MyText>
            <MyText style="text-[#2C9CDB] text-xl" variant="medium">
              2
            </MyText>
          </View>
        </View>
      </View>
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
