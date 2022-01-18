import tw from 'twrnc';
import { getToday } from 'react-native-modern-datepicker';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { CustomInput } from '../../common/components';
import MyAutocompleteInput from './MyAutocompleteInput';

export default function SearchFormInput({ searchButton, style = '' }) {
  const [checkIn, setCheckIn] = useState(getToday());
  const [checkOut, setCheckOut] = useState(getToday());
  const [guests, setGuests] = useState('');
  const navigation = useNavigation();

  const submitHandler = () => {
    console.log({ checkIn, checkOut, guests });
    // navigation.navigate('Hotels');
  };

  return (
    <View style={tw.style(`border-0 shadow-lg rounded-3xl p-5 bg-white ${style}`)}>
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
        placeholder="2 rooms, 5 guests"
        iconName="person"
        iconType="ionicon"
        value={guests}
        setValue={setGuests}
      />
      {searchButton && (
        <TouchableOpacity style={tw`overflow-hidden my-4 mb-0 rounded-md font-bold`}>
          <Button title="Search" color="#2C9CDB" onPress={submitHandler} />
        </TouchableOpacity>
      )}
    </View>
  );
}
