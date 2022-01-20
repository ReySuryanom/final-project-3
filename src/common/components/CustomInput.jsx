import tw from 'twrnc';
import { useCallback, useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import MyText from './MyText';
import MyDatePicker from './MyDatePicker';
import { formatDate } from '../helpers';
import { setCheckIn, setCheckOut } from '../../features/search/searchSlice';

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
  const dispatch = useDispatch();

  const eventHandler = useCallback(
    (data) => {
      const formattedDate = getFormatedDate(new Date(data), 'YYYY-MM-DD');
      setValue(formatDate(data));

      if (label.includes('-in')) {
        dispatch(setCheckIn(formattedDate));
      } else {
        dispatch(setCheckOut(formattedDate));
      }
      setOpen('hidden');
    },
    [setValue, label, dispatch]
  );
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
