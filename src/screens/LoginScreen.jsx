import tw from 'twrnc';
import { View, Button, TouchableOpacity } from 'react-native';
import { CustomInput, MyText } from '../common/components';

export default function LoginScreen() {
  return (
    <View style={tw`m-5 p-10 bg-white rounded-3xl my-auto shadow-md`}>
      <CustomInput label="Username" placeholder="admin" iconName="person" iconType="ionicon" />
      <CustomInput
        style={tw`my-3`}
        label="Password"
        placeholder="admin12345"
        iconName="lock-closed"
        iconType="ionicon"
      />
      <TouchableOpacity style={tw`rounded-md overflow-hidden mt-4`}>
        <Button title="Login" onPress={() => {}} />
      </TouchableOpacity>
      <MyText style="mt-5 text-lg" variant="medium">
        Demo:
      </MyText>
      <MyText style="text-gray-500">Username: admin</MyText>
      <MyText style="text-gray-500">Password: admin12345</MyText>
    </View>
  );
}
