import { Button, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { CustomInput, MyText } from '../common/components';

export default function BookingScreen() {
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
          <MyText style="text-base mb-2">3 days, 1 Room, Guest</MyText>
          <View style={tw`flex-row justify-between mb-2`}>
            <MyText style="text-base text-gray-500">Total</MyText>
            <MyText style="text-base text-gray-500">$458</MyText>
          </View>
          <View style={tw`flex-row justify-between mb-2`}>
            <MyText style="text-base text-gray-500">Payable Now</MyText>
            <MyText style="text-base text-gray-500">$45</MyText>
          </View>
        </View>
      </View>
      <TouchableOpacity style={tw`absolute w-full bottom-20 left-0 rounded-3xl`}>
        <Button title="Continue" />
      </TouchableOpacity>
    </View>
  );
}
