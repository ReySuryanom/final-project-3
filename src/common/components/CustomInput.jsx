import tw from 'twrnc';
import { Text, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default function CustomInput({
  style,
  label,
  placeholder,
  iconName,
  iconType,
  children,
  type = 'default',
}) {
  return (
    <View style={{ marginVertical: 5, ...style }}>
      <Text style={tw.style(`text-2xl mb-2 text-[#D32F2F]`, { fontFamily: 'ubuntu-medium' })}>
        {label}
      </Text>
      <View style={tw`border border-[#C1C6CC] rounded-md flex-row px-3 ${!children && 'py-2'}`}>
        {iconName && (
          <Icon
            size={20}
            containerStyle={tw`my-auto mr-1.5`}
            name={iconName}
            type={iconType}
            color="#156BC1"
          />
        )}
        {children || (
          <TextInput
            style={tw`text-black w-full`}
            placeholderTextColor="#156BC1"
            placeholder={placeholder}
            keyboardType={type}
          />
        )}
      </View>
    </View>
  );
}
