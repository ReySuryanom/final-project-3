import tw from 'twrnc';
import { useSelector, useDispatch } from 'react-redux';
import { getToday } from 'react-native-modern-datepicker';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { CustomInput } from '../../common/components';
import MyAutocompleteInput from './MyAutocompleteInput';
import { setGuests } from './searchSlice';

export default function SearchFormInput({ searchButton, style = '' }) {
  const dispatch = useDispatch();
  const [checkIn, setCheckIn] = useState(getToday());
  const search = useSelector((state) => state.search);
  const [checkOut, setCheckOut] = useState(getToday());
  const [guests, setGuest] = useState('');
  const navigation = useNavigation();

  const submitHandler = () => {
    dispatch(setGuests(guests));
    navigation.navigate({
      name: 'Hotels',
      params: {
        city: search.city,
        checkIn: search.checkIn,
        checkOut: search.checkOut,
        guests,
      },
    });
  };

  return (
    <View
      style={tw.style(
        `${!search.showSearch ? 'hidden' : ''} border-0 shadow-lg rounded-3xl p-5 bg-white ${style}`
      )}
    >
      <MyAutocompleteInput />
      <View style={tw`flex-row justify-between`}>
        <CustomInput
          style={{ flex: 0.47 }}
          label="Check-in"
          iconName="calendar-outline"
          iconType="ionicon"
          value={checkIn}
          setValue={setCheckIn}
          button
        />
        <CustomInput
          style={{ flex: 0.47 }}
          label="Check-out"
          iconName="calendar-outline"
          iconType="ionicon"
          value={checkOut}
          setValue={setCheckOut}
          button
        />
      </View>
      <CustomInput
        label="Guests"
        placeholder="2 guests"
        iconName="person"
        iconType="ionicon"
        type="numeric"
        value={guests}
        setValue={setGuest}
      />
      {searchButton && (
        <TouchableOpacity style={tw`overflow-hidden my-4 mb-0 rounded-md font-bold`}>
          <Button title="Search" color="#2C9CDB" onPress={submitHandler} />
        </TouchableOpacity>
      )}
    </View>
  );
}
