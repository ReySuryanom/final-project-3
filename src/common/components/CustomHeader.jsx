import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { toggleSearch } from '../../features/search/searchSlice';

export default function CustomHeader() {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Icon
        type="ionicon"
        name="options-outline"
        color="white"
        size={30}
        onPress={() => dispatch(toggleSearch())}
      />
    </TouchableOpacity>
  );
}
