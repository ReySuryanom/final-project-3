import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoriteScreen } from '../screens';

const FavoriteStack = createNativeStackNavigator();

export default function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
}
