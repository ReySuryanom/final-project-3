import tw from 'twrnc';
import { View, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { CustomInput } from '../../common/components';
import MyAutocompleteInput from './MyAutocompleteInput';

export default function SearchFormInput() {
  return (
    <View style={tw.style(`border-0 shadow-lg m-5 rounded-3xl overflow-hidden p-5 bg-white`)}>
      <MyAutocompleteInput />
      <View style={tw`flex-row justify-between`}>
        <CustomInput
          style={{ flex: 0.47 }}
          label="Check-in"
          placeholder="Fri, Jan 6"
          iconName="calendar-outline"
          iconType="ionicon"
        />
        <CustomInput
          style={{ flex: 0.47 }}
          label="Check-out"
          placeholder="Fri, Jan 7"
          iconName="calendar-outline"
          iconType="ionicon"
        />
      </View>
      <CustomInput
        label="Guests"
        placeholder="2 rooms, 5 guests"
        iconName="person"
        iconType="ionicon"
      />
      <TouchableOpacity style={tw.style(`overflow-hidden my-4 mb-0 rounded-md font-bold`)}>
        <Button title="Search" color="#156BC1" />
      </TouchableOpacity>
    </View>
  );
}
