import tw from 'twrnc';
import { View, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { CustomInput } from '../../common/components';
import MyAutocompleteInput from './MyAutocompleteInput';

export default function SearchFormInput({ translateY, toggleSearch }) {
  return (
    <View
      style={tw.style(`w-full absolute bottom-0 left-0 border-0 p-5 bg-white rounded-t-3xl`, {
        transform: [{ translateY }],
      })}
    >
      <Icon
        containerStyle={{ marginVertical: -28, marginBottom: -20 }}
        size={50}
        onPress={() => toggleSearch(0)}
        name="remove"
        type="ionicon"
      />
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
      <TouchableOpacity style={tw.style(`overflow-hidden my-4 mb-0 rounded-md`)}>
        <Button title="Search" color="#2C9CDB" />
      </TouchableOpacity>
    </View>
  );
}
