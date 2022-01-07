import tw from 'twrnc';
import { useCallback, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import { useDispatch } from 'react-redux';
import SugesstionItem from './SugesstionItem';
import { CustomInput } from '../../common/components';
import config from '../../common/constant';
import { toStringFormat } from '../../common/helpers';
import useFetch from '../../common/hooks/useFetch';
import { setHotels } from '../destination/destinationsSlice';

export default function MyAutocompleteInput() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const inputQuery = useMemo(() => config(query), [query]);
  const { data } = useFetch(inputQuery);

  const renderSugesstions = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => dispatch(setHotels({}))}>
        <SugesstionItem list={toStringFormat(item.caption)} />
      </TouchableOpacity>
    ),
    [dispatch]
  );

  return (
    <CustomInput style={tw`border-0`} label="Where to?" iconName="location" iconType="ionicon">
      <AutocompleteInput
        containerStyle={tw`flex-1`}
        inputContainerStyle={tw`border-0`}
        placeholder="e.g. Jakarta"
        placeholderTextColor="#156BC1"
        data={data}
        value={query}
        onChangeText={(text) => setQuery(text)}
        flatListProps={{
          keyExtractor: (key) => key.destinationId,
          renderItem: renderSugesstions,
        }}
      />
    </CustomInput>
  );
}
