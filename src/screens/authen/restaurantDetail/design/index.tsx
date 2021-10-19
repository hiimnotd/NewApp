import {moderateScale} from '@app/src/common';
import {Background, Icon, Space} from '@app/src/components';
import {RestaurantItem} from '@app/src/components/RestaurantItem';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {Dish, Restaurant} from '@app/src/types';
import React, {memo, useState} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {DetailTab} from './components/DetailTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    alignItems: 'center',
  },
  cover: {
    width: '100%',
    height: 200,
  },
  name: {
    color: ColorDefault.primary,
    fontWeight: 'bold',
    fontSize: fontSizeDefault.FONT_18,
  },
  reviews: {
    color: ColorDefault.primary,
    fontSize: fontSizeDefault.FONT_114,
  },
});

const RestaurantDetailComponent = () => {
  // state
  const [restaurant, setRestaurant] = useState<Restaurant>({
    id: 1,
    name: 'Phan Hotpot',
    cover:
      'https://lh3.googleusercontent.com/proxy/6frpTNRlqVvMx9h4hxou35--HIyTswCWRBwyjxBHS9hDVJ5W5gempxP_JD_elmZu7UbCA6-TVucjkm0u1NubzuRESq8He3SEpdst2C0s0p98TIo',
    rating: 4.7,
    reviews: 999,
    liked: false,
  });

  // render
  return (
    <Background>
      <FastImage source={{uri: restaurant.cover}} style={styles.cover} />
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: moderateScale(5),
          }}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Space height={7} />
          <View style={{flexDirection: 'row'}}>
            <Icon source={'star'} size={16} />
            <Space width={7} />
            <Text style={styles.reviews}>
              {`${restaurant.rating} (${restaurant.reviews} reviews)`}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon source={'heart'} size={24} />
        </TouchableOpacity>
      </View>
      <DetailTab />
    </Background>
  );
};
export const RestaurantDetail = memo(RestaurantDetailComponent, isEqual);
