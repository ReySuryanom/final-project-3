import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackScreenStyle } from '../common/constant';
import { BookingHistoryScreen } from '../screens';

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ ...stackScreenStyle }}>
      <ProfileStack.Screen
        name="BookingHistory"
        component={BookingHistoryScreen}
        options={{ title: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}
