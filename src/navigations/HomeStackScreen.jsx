import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SearchResultScreen } from '../screens';
import { headerRight } from '../common/helpers';
import { stackScreenStyle } from '../common/constant';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ ...stackScreenStyle, headerRight }}>
      <HomeStack.Screen name="Destinations" component={HomeScreen} />
      <HomeStack.Screen name="Hotels" component={SearchResultScreen} />
    </HomeStack.Navigator>
  );
}
