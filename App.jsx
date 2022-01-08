import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import store from './src/app/store';
import { HomeScreen, SearchResultScreen } from './src/screens';
import { ubuntuFonts } from './src/common/helpers';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts(ubuntuFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#2C9CDB' },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
