import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function CustomHeader() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Icon type="ionicon" name="options-outline" color="white" size={30} />
    </TouchableOpacity>
  );
}
