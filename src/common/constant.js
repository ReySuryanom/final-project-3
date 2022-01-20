import { HOTELS_APIKEY } from 'react-native-dotenv';

const BASE_URL = 'https://hotels4.p.rapidapi.com';

const config = (query, endpoints = '/locations/v2/search') => ({
  method: 'GET',
  url: `${BASE_URL}${endpoints}`,
  params: { ...query, currency: 'USD', locale: 'in_ID' },
  headers: {
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    'x-rapidapi-key': HOTELS_APIKEY,
  },
});

export const topDestinatons = [
  {
    id: 661282,
    name: 'Denpasar',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6IPIf7j-0c2Ac7ZsDtHdQSaMbeNXL6uLyhqXLYNyZiRky6D4x7-4VP35&s=8',
  },
  {
    id: 659455,
    name: 'Jakarta',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQb36i7rKSn_tPCpCTqaji0zj01C-MZSMcmaeCNcDLZrroDx5NDwOk3m3&s=8',
  },
  {
    id: 1636445,
    name: 'Lombok',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYIZCp2usHequFFEesSIKV0JvCkjtsYGjccCDs7HT8YPg6wV_Ot0lbFsE&s=8',
  },
  {
    id: 1644855,
    name: 'Yogyakarta',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx3l_sqOt1m_QpnS0uKaEX7u-U5vGd3Fu-BlrHEDH&s=8',
  },
];

export const popularDestinatons = [
  {
    id: 1642042,
    name: 'Canggu',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4x7l9uRZQxffkycnLZrvHDWUs0xDVoZPqUqjYmRQB&s=8',
  },
  {
    id: 1637358,
    name: 'Kuta',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RGvDABEOWVRye8D8C9dCqtjzssB6mLIn9lxrib0sVwh5I88R_VhAmZOK&s=8',
  },
  {
    id: 666143,
    name: 'Bandung',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4mq09-az6ddlDEoQ6QPBid5gK6JGPN1Ee9mGk9wTgwR6PQUFqvzfJteL&s=8',
  },
  {
    id: 667845,
    name: 'Surabaya',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSr3NEdMbV_NpnYSriOURMnUEKxunrWdGcHHPPZ_GehJt3bsNL0o1v0nm&s=8',
  },
];

export const listParams = ({ city, checkIn, checkOut, guests }) => ({
  destinationId: city,
  checkIn,
  checkOut,
  adults1: guests,
  pageNumber: '1',
  pageSize: '10',
  sortOrder: 'PRICE',
});

export const stackScreenStyle = {
  headerStyle: { backgroundColor: '#2C9CDB' },
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 25, fontFamily: 'ubuntu-bold' },
};

export const days = ['sunday'];

export default config;
