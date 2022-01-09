import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens';

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
