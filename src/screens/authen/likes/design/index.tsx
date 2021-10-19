import {HeaderTitle, Space} from '@app/src/components';
import {Background} from '@app/src/components/Background/Background';
import {RestaurantItem} from '@app/src/components/RestaurantItem';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {Restaurant} from '@app/src/types';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';

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
  },
  {
    id: 2,
    name: 'Phan Hotpot',
    avatar:
      'https://lh3.googleusercontent.com/proxy/6frpTNRlqVvMx9h4hxou35--HIyTswCWRBwyjxBHS9hDVJ5W5gempxP_JD_elmZu7UbCA6-TVucjkm0u1NubzuRESq8He3SEpdst2C0s0p98TIo',
    rating: 4.7,
    reviews: 999,
    liked: true,
  },
];

export type LikesScreenProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.LIKES
>;

const LikesComponent = ({navigation}: LikesScreenProps) => {
  // functions
  const onNavigateDetail = useCallback(() => {
    navigation.navigate(APP_SCREEN.RESTAURANT_DETAIL);
  }, [navigation]);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Restaurant>) => {
      return <RestaurantItem item={item} onNavigateDetail={onNavigateDetail} />;
    },
    [onNavigateDetail],
  );

  const keyExtractor = useCallback((item: Restaurant) => {
    return String(item.id);
  }, []);

  const renderSeparator = useCallback(() => {
    return <Space height={5} />;
  }, []);

  //effect

  // render
  return (
    <Background>
      <HeaderTitle title={'Likes'} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </Background>
  );
};

export const Likes = memo(LikesComponent, isEqual);
