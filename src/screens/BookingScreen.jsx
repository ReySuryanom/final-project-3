import tw from 'twrnc';
import { Button, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomInput, MyText } from '../common/components';
import { addBookedHotels } from '../features/destination/destinationsSlice';
import LoginScreen from './LoginScreen';

export default function BookingScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const { payable, id, image, city, country, rating, name, price } = route.params;
  const { checkIn, checkOut, guests } = useSelector((state) => state.search);
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(checkIn);
  const secondDate = new Date(checkOut);
  const days = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  const bookHotel = () => {
    navigation.popToTop();
    dispatch(addBookedHotels({ id, image, city, country, rating, name, price }));
    navigation.navigate('BookingHistory');
  };

  if (!isUserLoggedIn) {
    return <LoginScreen />;
  }
  return (
    <View style={tw`relative flex-1 m-5`}>
      <View style={tw`p-5 bg-white rounded-lg`}>
        <MyText style="text-lg uppercase" variant="bold">
          Contact Informations
        </MyText>
        <View style={tw`p-2`}>
          <CustomInput iconName="person" placeholder="Full Name" />
          <CustomInput iconName="mail" placeholder="Your email..." />
          <CustomInput iconName="call" placeholder="+62" />
        </View>
        <MyText style="text-lg uppercase mb-1" variant="bold">
          Price Summary
        </MyText>
        <View style={tw`p-2`}>
          <MyText style="text-base mb-2">
            {days} days, 1 Room, {guests} Guest
          </MyText>
          <View style={tw`flex-row justify-between mb-2`}>
            <MyText style="text-base text-gray-500">Total</MyText>
            <MyText style="text-base text-[#2C9CDB]" variant="bold">
              ${price * days + payable + guests}
            </MyText>
          </View>
          <View style={tw`flex-row justify-between mb-2`}>
            <MyText style="text-base text-gray-500">Payable Now</MyText>
            <MyText style="text-base text-[#2C9CDB]" variant="bold">
              ${payable}
            </MyText>
          </View>
        </View>
      </View>
      <TouchableOpacity style={tw`absolute w-full bottom-20 left-0 rounded-3xl`}>
        <Button title="Continue" onPress={bookHotel} />
      </TouchableOpacity>
    </View>
  );
}
