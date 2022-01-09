import tw from 'twrnc';
import { View } from 'react-native';
import { MyText } from '../../common/components';

export default function SugesstionItem({ list }) {
  if (list.length === 1) {
    return (
      <View>
        <MyText style="text-red-500" variant="bold">
          {list[0]}
        </MyText>
      </View>
    );
  }

  return (
    <View>
      <MyText style={tw`text-red-500`} variant="bold">
        {list.shift()}
      </MyText>
      <MyText style={tw`text-black`} variant="light">
        {list.shift().trim() + list}
      </MyText>
    </View>
  );
}
