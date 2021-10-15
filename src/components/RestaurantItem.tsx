import {moderateScale} from '@app/src/common';
import {Icon, Space} from '@app/src/components';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {Restaurant} from '@app/src/types';
import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    alignItems: 'center',
    backgroundColor: ColorDefault.offWhite,
  },
  avatar: {
    width: 70,
    height: 70,
  },
  name: {
    color: ColorDefault.primary,
    fontWeight: 'bold',
    fontSize: fontSizeDefault.FONT_14,
  },
  reviews: {
    color: ColorDefault.primary,
    fontSize: fontSizeDefault.FONT_12,
  },
  schedule: {
    paddingVertical: moderateScale(5),
  },
});

interface RestaurantItemProps {
  item: Restaurant;
  onNavigateDetail?: () => void;
  isSchedule?: boolean;
}

const RestaurantItemComponent = ({
  item,
  onNavigateDetail,
  isSchedule = false,
}: RestaurantItemProps) => {
  // function
  const onPress = useCallback(() => {
    if (typeof onNavigateDetail === 'function') {
      onNavigateDetail();
    }
  }, [onNavigateDetail]);

  //render
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FastImage source={{uri: item.avatar}} style={styles.avatar} />
      <Space width={15} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: moderateScale(5),
        }}>
        <Text style={styles.name}>{item.name}</Text>

        {isSchedule ? (
          <Text style={[styles.reviews, styles.schedule]}>{item.schedule}</Text>
        ) : (
          <Space height={7} />
        )}
        <View style={{flexDirection: 'row'}}>
          <Icon source={'star'} size={14} />
          <Space width={7} />
          <Text style={styles.reviews}>{item.reviews} review</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon source={item.liked ? 'heart' : 'heartOutline'} size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export const RestaurantItem = memo(RestaurantItemComponent, isEqual);
