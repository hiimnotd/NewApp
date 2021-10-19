import {moderateScale} from '@app/src/common';
import {Icon, Space} from '@app/src/components';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {Dish, Restaurant} from '@app/src/types';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, View} from 'react-native';
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
  size: {
    color: ColorDefault.primary,
    fontSize: fontSizeDefault.FONT_14,
  },
  price: {
    color: '#FF8C68',
    fontSize: fontSizeDefault.FONT_14,
  },
});

interface MenuItemProps {
  item: Dish;
}

const MenuItemComponent = ({item}: MenuItemProps) => {
  //render
  return (
    <View style={styles.container}>
      <FastImage source={{uri: item.image}} style={styles.avatar} />
      <Space width={15} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: moderateScale(5),
        }}>
        <Text style={styles.name}>{item.name}</Text>
        {/* <Text style={styles.size}>{item.size}</Text> */}
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

export const MenuItem = memo(MenuItemComponent, isEqual);
