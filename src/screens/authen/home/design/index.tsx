import {moderateScale} from '@app/src/common';
import {SearchBar, Space} from '@app/src/components';
import {Background} from '@app/src/components/Background/Background';
import {RestaurantItem} from '@app/src/components/RestaurantItem';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {Restaurant} from '@app/src/types';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {FlatList, ListRenderItemInfo, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  greeting: {
    color: ColorDefault.primary,
    fontWeight: 'bold',
    fontSize: fontSizeDefault.FONT_24,
    paddingHorizontal: moderateScale(25),
    paddingVertical: moderateScale(25),
  },
});

const data: Array<Restaurant> = [
  {
    id: 1,
    name: 'Chago',
    avatar:
      'https://lh3.googleusercontent.com/proxy/rm9x5Fjy9Pt2RRe5_wT89nTFWCRYKP9rDXGr_ZbPbBBfY3C2AePqx8cqF-X8Qoe_NupRdpKjThgBrDHVWXZULQ_GIm11rsGoSrKS10KGsaqinq2CgzdBMVHSficHrd5eslovcb8j9auOSILqXfv4Lyo',
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
  {
    id: 3,
    name: 'Alo Sushi',
    avatar:
      'https://alosushi.vn/images/ckeditor/images/gia-do-an-alo-sushi1.jpg',
    rating: 4.2,
    reviews: 999,
    liked: false,
  },
];

export type HomeScreenProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.HOME
>;

const HomeComponent = ({navigation}: HomeScreenProps) => {
  // state
  const [filterData, setFilterData] = useState<Array<Restaurant>>(data);

  const [search, setSearch] = useState('');

  //function
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

  const onChangeText = useCallback((text: string) => {
    setSearch(text);
  }, []);

  // effect

  useEffect(() => {
    if (search !== '') {
      const timeout = setTimeout(() => {
        const d = data.filter(item =>
          item.name.toLowerCase().trim().includes(search.toLowerCase().trim()),
        );
        setFilterData(d);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setFilterData(data);
    }
  }, [search]);

  // render
  return (
    <Background>
      <Text style={styles.greeting}>Hi, Nguyen</Text>
      <SearchBar onChangeText={onChangeText} />
      <Space height={20} />
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </Background>
  );
};

export const Home = memo(HomeComponent, isEqual);
