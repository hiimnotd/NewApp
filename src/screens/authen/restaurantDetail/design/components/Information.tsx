import {Space} from '@app/src/components';
import {RestaurantInformation} from '@app/src/types';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, View} from 'react-native';

import {InformationRow} from './InformationRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const InformationComponent = () => {
  // state
  const data: RestaurantInformation = {
    location: 'Ngách 3 Ngõ 131 - Thái Hà, Trung Liệt, Đống Đa',
    type: 'Hotpot',
    cash: '150,000đ',
    openTime: 'Everyday: 08:00 - 23:00',
  };

  //render
  return (
    <View style={styles.container}>
      <InformationRow icon={'path'} content={data.location} />
      <Space height={20} />
      <InformationRow icon={'fastfood'} content={data.type} />
      <Space height={20} />
      <InformationRow icon={'cash'} content={data.cash} />
      <Space height={20} />
      <InformationRow icon={'timer'} content={data.openTime} />
    </View>
  );
};

export const Information = memo(InformationComponent, isEqual);
