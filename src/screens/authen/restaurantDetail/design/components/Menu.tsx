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
      name: 'Set 99k',
      size: 'Size M',
      price: '99,000 đ',
      image:
        'https://i2.wp.com/kenhhomestay.com/wp-content/uploads/2021/03/lau-phan-9.jpg',
    },
    {
      id: 2,
      name: 'Set 119k',
      size: 'Size L',
      price: '119,000 đ',
      image: 'https://cdn.lauphan.com/photo-storage/myFile-1617847162937.jpeg',
    },
    {
      id: 3,
      name: 'Set 129k',
      size: 'Size L',
      price: '129,000 đ',
      image:
        'https://top10vietnam.vn/wp-content/uploads/2020/01/combo-129k-lau-phan.jpg',
    },
    {
      id: 4,
      name: 'Set 169k',
      size: 'Size L',
      price: '169,000 đ',
      image: 'https://cdn.lauphan.com/photo-storage/myFile-1617847253471.jpeg',
    },
    {
      id: 5,
      name: 'Buffet Pepsi',
      size: 'Size L',
      price: '39,000 đ / people',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/89/5a/d3/a2362f80c5e6da0a5702909e53423cd0.jpg',
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
