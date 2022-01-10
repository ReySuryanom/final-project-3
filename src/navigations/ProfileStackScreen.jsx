import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackScreenStyle } from '../common/constant';
import { LoginScreen, ProfileScreen } from '../screens';

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ ...stackScreenStyle }}>
      <ProfileStack.Screen name="Profile" component={LoginScreen} />
    </ProfileStack.Navigator>
  );
}
