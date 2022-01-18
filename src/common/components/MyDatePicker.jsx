import { TouchableOpacity } from 'react-native';
import MyText from './MyText';

export default function MyDatePicker({ buttonTitle, action }) {
  return (
    <TouchableOpacity>
      <MyText style="text-[#919294] py-1.5" action={action}>
        {buttonTitle}
      </MyText>
    </TouchableOpacity>
  );
}
