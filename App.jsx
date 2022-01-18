import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import store from './src/app/store';
import { initializeTabBarIcon, ubuntuFonts } from './src/common/helpers';
import {
  FavoriteStackScreen,
  HomeStackScreen,
  ProfileStackScreen,
  SettingsStackScreen,
} from './src/navigations';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(ubuntuFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Tab.Navigator screenOptions={initializeTabBarIcon}>
            <Tab.Screen name="HomeTab" component={HomeStackScreen} />
            <Tab.Screen name="FavoriteTab" component={FavoriteStackScreen} />
            <Tab.Screen name="ProfileTab" component={ProfileStackScreen} />
            <Tab.Screen name="SettingsTab" component={SettingsStackScreen} />
          </Tab.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
