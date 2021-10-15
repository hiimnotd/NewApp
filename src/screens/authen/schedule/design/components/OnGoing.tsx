import {Space} from '@app/src/components';
import {RestaurantItem} from '@app/src/components/RestaurantItem';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {Restaurant} from '@app/src/types';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({});

const data: Array<Restaurant> = [
  {
    id: 2,
    name: 'Phan Hotpot',
    avatar:
      'https://lh3.googleusercontent.com/proxy/6frpTNRlqVvMx9h4hxou35--HIyTswCWRBwyjxBHS9hDVJ5W5gempxP_JD_elmZu7UbCA6-TVucjkm0u1NubzuRESq8He3SEpdst2C0s0p98TIo',
    rating: 4.7,
    reviews: 999,
    liked: true,
    schedule: '20:00 - Thursday, 11/11/2021',
  },
];

export type ScheduleScreenProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.SCHEDULE
>;

const OnGoingComponent = () => {
  // functions
  const renderItem = useCallback(({item}: ListRenderItemInfo<Restaurant>) => {
    return <RestaurantItem item={item} isSchedule />;
  }, []);

  const keyExtractor = useCallback((item: Restaurant) => {
    return String(item.id);
  }, []);

  const renderSeparator = useCallback(() => {
    return <Space height={5} />;
  }, []);

  // render
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export const OnGoing = memo(OnGoingComponent, isEqual);
