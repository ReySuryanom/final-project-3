import { HOTELS_APIKEY } from 'react-native-dotenv';

const BASE_URL = 'https://hotels-com-provider.p.rapidapi.com';

const config = (query) => ({
  method: 'GET',
  url: `${BASE_URL}/v1/destinations/search`,
  params: { query, currency: 'IDR', locale: 'in_ID' },
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': HOTELS_APIKEY,
  },
});

export const stackScreenStyle = {
  headerStyle: { backgroundColor: '#2C9CDB' },
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 25 },
};

export default config;
