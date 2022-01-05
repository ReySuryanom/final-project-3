import tw from 'twrnc';
import { useState } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { tabList } from '../constant';

export default function BottomTab({ index = 0 }) {
  const [tab, setTab] = useState(index);

  return (
    <View style={tw.style(`flex-row justify-evenly bg-[#F7F7F9]`, { flex: 0.09 })}>
      {tabList.map((item, idx) => {
        const isActiveTab = tab === idx;

        return (
          <TouchableOpacity
            style={tw`border-[#2C9CDB] ${isActiveTab && 'border-t-2'}`}
            onPress={() => setTab(idx)}
            key={item}
          >
            <Icon
              size={30}
              containerStyle={tw`my-auto`}
              name={`${isActiveTab ? item : item.concat('-outline')}`}
              type="ionicon"
              color={`${isActiveTab ? '#2C9CDB' : '#98A1A8'}`}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
