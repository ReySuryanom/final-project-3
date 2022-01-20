/* eslint-disable react/no-unstable-nested-components */
import tw from 'twrnc';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Separator } from '../common/components';
import { Hotel } from '../features/destination';
import { SearchFormInput } from '../features/search';
import config, { listParams } from '../common/constant';

export default function SearchResultScreen({ route }) {
  const [loading, setLoading] = useState(true);
  const [listHotels, setListHotels] = useState([]);

  useEffect(() => {
    axios.request(config({ ...listParams(route.params) }, '/properties/list')).then((res) => {
      setListHotels(res?.data?.data?.body?.searchResults?.results);
      setLoading(false);
    });
  }, [route.params]);

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center`}>
        <ActivityIndicator size={80} color="#2C9CDB" />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 pb-5`}>
      <View style={{ flex: 0.965 }}>
        <SearchFormInput style="mx-5 mt-5" />
        <FlatList
          data={listHotels}
          contentContainerStyle={tw`p-5 pt-0`}
          style={tw.style(`mt-5`, { overflow: 'visible' })}
          ItemSeparatorComponent={() => <Separator vertical />}
          renderItem={({ item }) => (
            <Hotel
              id={item.id}
              image={item.optimizedThumbUrls.srpDesktop}
              country={item.address.countryName}
              city={item.address.region}
              rating={item.starRating}
              name={item.name}
              price={item.ratePlan.price.exactCurrent}
            />
          )}
        />
      </View>
    </View>
  );
}
