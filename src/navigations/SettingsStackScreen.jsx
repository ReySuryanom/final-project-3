import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackScreenStyle } from '../common/constant';
import { SettingsScreen } from '../screens';

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ ...stackScreenStyle }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
