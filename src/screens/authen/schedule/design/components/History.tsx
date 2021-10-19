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
    id: 1,
    name: 'King BBQ',
    avatar:
      'https://media-cdn.tripadvisor.com/media/photo-s/17/a2/84/e4/nu-ng-khong-khoi-t-i.jpg',
    rating: 4.5,
    reviews: 999,
    liked: true,
    schedule: '10:00 - Wednesday, 10/10/2021',
  },
  {
    id: 3,
    name: 'Alo Sushi',
    avatar:
      'https://alosushi.vn/images/ckeditor/images/gia-do-an-alo-sushi1.jpg',
    rating: 4.2,
    reviews: 999,
    liked: false,
    schedule: '20:00 - Wednesday, 10/10/2021',
  },
];

export type ScheduleScreenProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.SCHEDULE
>;

const HistoryComponent = () => {
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

export const History = memo(HistoryComponent, isEqual);
