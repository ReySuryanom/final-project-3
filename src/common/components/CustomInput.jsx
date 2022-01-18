import tw from 'twrnc';
import { useState } from 'react';
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import MyText from './MyText';
import MyDatePicker from './MyDatePicker';

export default function CustomInput({
  value,
  setValue,
  style,
  label,
  placeholder,
  iconName,
  iconType,
  children,
  lock,
  button,
  type = 'default',
}) {
  const [open, setOpen] = useState('hidden');

  const eventHandler = (data) => {
    setValue(data);
    setOpen('hidden');
  };

  return (
    <>
      <View style={{ marginVertical: 5, ...style }}>
        {label && <MyText style="text-2xl mb-2 text-[#282828]">{label}</MyText>}
        <View
          style={tw`border overflow-hidden border-[#C1C6CC] rounded-md flex-row px-3 ${
            !children && 'py-2'
          }`}
        >
          {iconName && (
            <Icon
              size={20}
              containerStyle={tw`my-auto mr-1.5`}
              name={iconName}
              type={iconType}
              color="#2C9CDB"
            />
          )}
          {children ||
            (button ? (
              <MyDatePicker buttonTitle={value} action={() => setOpen('')} />
            ) : (
              <TextInput
                style={tw`text-black w-full`}
                placeholderTextColor="#919294"
                placeholder={placeholder}
                keyboardType={type}
                value={value}
                onChangeText={setValue}
                secureTextEntry={lock}
              />
            ))}
        </View>
      </View>
      {button && (
        <DatePicker
          selected={value}
          mode="calendar"
          onDateChange={eventHandler}
          style={tw`${open} rounded-xl shadow-xl`}
        />
      )}
    </>
  );
}
