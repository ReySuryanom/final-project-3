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
    <View style={{ marginVertical: 6, ...style }}>
      <Text style={tw.style(`text-xl mb-2`, { fontFamily: 'ubuntu-medium' })}>{label}</Text>
      <View style={tw`border border-[#C1C6CC] rounded-md flex-row px-3 ${!children && 'py-2'}`}>
        {iconName && (
          <Icon
            size={20}
            containerStyle={tw`my-auto mr-1.5`}
            name={iconName}
            type={iconType}
            color="#C1C6CC"
          />
        )}
        {children || (
          <TextInput style={tw`text-black w-full`} placeholder={placeholder} keyboardType={type} />
        )}
      </View>
    </View>
  );
}
