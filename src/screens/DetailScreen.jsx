import tw from 'twrnc';
import axios from 'axios';
import {
  Button,
  ImageBackground,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  LogBox,
} from 'react-native';
import { useEffect, useState } from 'react';
import { Label, MyText } from '../common/components';
import config from '../common/constant';
import { trim } from '../common/helpers';

export default function DetailScreen({ route, navigation }) {
  const { id, image, city, country, rating, name, price } = route.params;
  const [loading, setLoading] = useState(true);
  const [detailHotel, setDetailHotel] = useState('');

  useEffect(() => {
    axios.request(config({ id }, '/properties/get-details')).then((res) => {
      setDetailHotel(res?.data?.data?.body);
    });
    setLoading(false);
  }, [id]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center bg-gray-900`}>
        <ActivityIndicator size={80} color="#2C9CDB" />
      </View>
    );
  }

  const goToBookmark = () => {
    navigation.navigate('Booking', {
      payable: detailHotel?.propertyDescription?.featuredPrice?.currentPrice?.plain,
      price,
      id,
      image,
      city,
      country,
      rating,
      name,
    });
  };

  return (
    <ImageBackground style={tw`flex-1 h-2/3 pt-80`} source={{ uri: image }}>
      <ScrollView style={tw`bg-white flex-1 rounded-t-3xl`}>
        <View style={tw`p-10 pb-20`}>
          <View style={tw`flex-row justify-between`}>
            <MyText style="text-3xl text-[#1C222C]" variant="bold">
              {trim(detailHotel?.smallPrint?.alternativeNames?.[0], 15)}
            </MyText>
            <MyText style="text-3xl text-[#2C9CDB]" variant="bold">
              ${price}
            </MyText>
          </View>
          <Label
            name="location"
            color="#2C9CDB"
            text={`${detailHotel?.propertyDescription?.address?.countryName}, ${detailHotel?.propertyDescription?.address?.countryName}`}
            style="text-lg text-gray-500"
          />
          <Label
            name="star"
            color="#F2CC00"
            text={detailHotel?.propertyDescription?.starRating}
            style="text-xl text-[#282828]"
            variant="bold"
          />
          <View style={tw`mt-10`}>
            <MyText style="text-3xl text-[#1C222C]" variant="bold">
              Overview
            </MyText>
            <MyText style="text-base text-gray-800 text-justify">
              {detailHotel?.atAGlance?.keyFacts?.specialCheckInInstructions}
              {detailHotel?.miscellaneous?.legalInfoForStrikethroughPrices}
            </MyText>
          </View>
          <View style={tw`mt-10`}>
            <MyText style="text-3xl text-[#1C222C]" variant="bold">
              Facilities
            </MyText>
            <FlatList
              keyExtractor={(index) => index + 1}
              data={detailHotel?.overview?.overviewSections[0].content}
              renderItem={({ item }) => (
                <View>
                  <MyText style="text-base capitalize">- {item}</MyText>
                </View>
              )}
            />
          </View>
          <View style={tw`mt-10`}>
            <MyText style="text-3xl text-[#1C222C]" variant="bold">
              Map
            </MyText>
            <Image
              source={{ uri: detailHotel?.propertyDescription?.mapWidget.staticMapUrl }}
              style={tw`w-full h-40`}
            />
          </View>
          <TouchableOpacity style={tw`rounded-full overflow-hidden mt-10 bg-black`}>
            <Button title="Bookmark" onPress={goToBookmark} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
