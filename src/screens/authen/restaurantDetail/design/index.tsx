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
    name: 'Chago',
    cover:
      'https://lh3.googleusercontent.com/proxy/rm9x5Fjy9Pt2RRe5_wT89nTFWCRYKP9rDXGr_ZbPbBBfY3C2AePqx8cqF-X8Qoe_NupRdpKjThgBrDHVWXZULQ_GIm11rsGoSrKS10KGsaqinq2CgzdBMVHSficHrd5eslovcb8j9auOSILqXfv4Lyo',
    rating: 4.5,
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
            <Text style={styles.reviews}>{restaurant.reviews} review</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon source={'heartOutline'} size={24} />
        </TouchableOpacity>
      </View>
      <DetailTab />
    </Background>
  );
};
export const RestaurantDetail = memo(RestaurantDetailComponent, isEqual);
