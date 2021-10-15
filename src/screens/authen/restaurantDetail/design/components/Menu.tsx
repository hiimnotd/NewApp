import {Space} from '@app/src/components';
import {MenuItem} from '@app/src/screens/authen/restaurantDetail/design/components/MenuItem';
import {Dish} from '@app/src/types';
import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';

const styles = StyleSheet.create({});

const MenuComponent = () => {
  // state
  const dishesData: Array<Dish> = [
    {
      id: 1,
      name: 'Oolong milk tea',
      size: 'Size M',
      price: '30,000 đ',
      image:
        'https://gongcha.com.vn/wp-content/uploads/2019/06/Mango-Milktea.png',
    },
    {
      id: 2,
      name: 'Oolong milk tea',
      size: 'Size L',
      price: '38,000 đ',
      image:
        'https://gongcha.com.vn/wp-content/uploads/2019/06/Mango-Milktea.png',
    },
  ];

  //function
  const renderItem = useCallback(({item}: ListRenderItemInfo<Dish>) => {
    return <MenuItem item={item} />;
  }, []);

  const keyExtractor = useCallback((item: Dish) => {
    return String(item.id);
  }, []);

  const renderSeparator = useCallback(() => {
    return <Space height={5} />;
  }, []);

  // render
  return (
    <View>
      <FlatList
        data={dishesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export const Menu = memo(MenuComponent, isEqual);
