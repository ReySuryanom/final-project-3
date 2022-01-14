import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackScreenStyle } from '../common/constant';
import { FavoriteScreen } from '../screens';

const FavoriteStack = createNativeStackNavigator();

export default function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator screenOptions={{ ...stackScreenStyle }}>
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
}
