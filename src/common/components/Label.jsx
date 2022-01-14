import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import MyText from './MyText';

export default function Label({ name, color, text, style, variant, size = 20, type = 'ionicon' }) {
  return (
    <View style={tw`items-center flex-row`}>
      <Icon name={name} type={type} color={color} size={size} containerStyle={tw`mr-1.5`} />
      <MyText style={style} variant={variant}>
        {text}
      </MyText>
    </View>
  );
}
