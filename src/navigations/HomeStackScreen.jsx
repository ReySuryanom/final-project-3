import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen, DetailScreen, HomeScreen, SearchResultScreen } from '../screens';
import { headerRight } from '../common/helpers';
import { stackScreenStyle } from '../common/constant';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ ...stackScreenStyle }}>
      <HomeStack.Screen name="Destinations" component={HomeScreen} options={{ headerRight }} />
      <HomeStack.Screen name="Hotels" component={SearchResultScreen} options={{ headerRight }} />
      <HomeStack.Screen
        name="DetailHotels"
        component={DetailScreen}
        options={{
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <HomeStack.Screen name="Booking" component={BookingScreen} />
    </HomeStack.Navigator>
  );
}
