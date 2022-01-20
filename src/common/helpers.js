/* eslint-disable react/jsx-filename-extension */
/* eslint-disable global-require */
import { Icon } from 'react-native-elements';
import CustomHeader from './components/CustomHeader';

export const ubuntuFonts = {
  'ubuntu-light': require('../assets/fonts/Ubuntu-Light.ttf'),
  'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  'ubuntu-medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  'ubuntu-bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
};

export const trim = (text, length) => (text ? text.substring(0, length) : text);

export const toStringFormat = (html) => {
  const headTag = "<span class='highlighted'>";
  const tailTag = '</span>';
  const removeSpanTags = html.replace(headTag, '').replace(tailTag, '');
  return removeSpanTags.split(',');
};

export const headerRight = () => <CustomHeader />;

export const formatText = (text) => text.replaceAll('/', '-');

export const formatDate = (text) => {
  const arrText = text.split('/');
  const plainDate = new Date(arrText[0], arrText[1] - 1, arrText[2]);
  const formattedDate = plainDate.toDateString('en-us', {
    day: 'numeric',
    month: 'short',
    year: '2-digit',
  });

  return formattedDate;
};

export const initializeTabBarIcon = ({ route }) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;
    if (route.name === 'HomeTab') {
      iconName = focused ? 'search' : 'search-outline';
    } else if (route.name === 'FavoriteTab') {
      iconName = focused ? 'heart' : 'heart-outline';
    } else if (route.name === 'ProfileTab') {
      iconName = focused ? 'person' : 'person-outline';
    } else if (route.name === 'SettingsTab') {
      iconName = focused ? 'settings' : 'settings-outline';
    }

    return <Icon name={iconName} type="ionicon" size={28} color={color} />;
  },
  tabBarStyle: { position: 'absolute', backgroundColor: '#F7F7F9' },
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#2C9CDB',
  tabBarInactiveTintColor: 'gray',
});
