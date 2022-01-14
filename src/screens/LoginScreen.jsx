import tw from 'twrnc';
import { useState } from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { USER, PASSWORD } from 'react-native-dotenv';
import { CustomInput, MyText } from '../common/components';
import { userLogin } from '../features/authentication/authSlice';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    if (username === USER && password === PASSWORD) {
      dispatch(userLogin());
    }
  };

  return (
    <View style={tw`m-5 p-10 bg-white rounded-3xl my-auto shadow-md`}>
      <CustomInput
        label="Username"
        placeholder="admin"
        iconName="person"
        iconType="ionicon"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        style={tw`my-3`}
        label="Password"
        placeholder="admin12345"
        iconName="lock-closed"
        iconType="ionicon"
        value={password}
        setValue={setPassword}
        lock
      />
      <TouchableOpacity style={tw`rounded-md overflow-hidden mt-4`}>
        <Button title="Login" onPress={submitForm} />
      </TouchableOpacity>
      <MyText style="mt-5 text-lg" variant="medium">
        Demo:
      </MyText>
      <MyText style="text-gray-500">Username: admin</MyText>
      <MyText style="text-gray-500">Password: admin12345</MyText>
    </View>
  );
}
