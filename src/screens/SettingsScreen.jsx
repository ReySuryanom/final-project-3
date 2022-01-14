import tw from 'twrnc';
import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../features/authentication/authSlice';
import { MyText } from '../common/components';
import LoginScreen from './LoginScreen';

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const { isUserLoggedIn, user } = useSelector((state) => state.auth);

  if (!isUserLoggedIn) {
    return <LoginScreen />;
  }

  const logOut = () => dispatch(userLogout());

  return (
    <View style={tw`p-5`}>
      <View style={tw`bg-white shadow-lg p-5 rounded-lg`}>
        <MyText style="uppercase text-xl" variant="bold">
          My Account
        </MyText>
        <View style={tw`flex-row items-center justify-between`}>
          <MyText style="text-gray-500 text-lg my-4">First Name</MyText>
          <MyText style="text-gray-900 text-lg my-4">{user.firstName}</MyText>
        </View>
        <Divider width={1} />
        <View style={tw`flex-row items-center justify-between`}>
          <MyText style="text-gray-500 text-lg my-4">Last Name</MyText>
          <MyText style="text-gray-900 text-lg my-4">{user.lastName}</MyText>
        </View>
        <Divider width={1} />
        <View style={tw`flex-row items-center justify-between`}>
          <MyText style="text-gray-500 text-lg my-4">Email</MyText>
          <MyText style="text-gray-900 text-lg my-4">{user.email}</MyText>
        </View>
        <Divider width={1} />
        <View style={tw`flex-row items-center justify-between`}>
          <MyText style="text-gray-500 text-lg mt-4">Gender</MyText>
          <MyText style="text-gray-900 text-lg mt-4">{user.gender}</MyText>
        </View>
      </View>
      <View style={tw`bg-white p-5 shadow-lg rounded-lg mt-5`}>
        <MyText style="uppercase text-xl" variant="bold">
          Support
        </MyText>
        <TouchableWithoutFeedback style={tw`w-3/12 bg-white`}>
          <MyText action={logOut} style="text-red-500 text-lg mt-4">
            Log Out
          </MyText>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
