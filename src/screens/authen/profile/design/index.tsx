import {HeaderTitle, Icon} from '@app/src/components';
import {Background} from '@app/src/components/Background/Background';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {ProfileRow} from './ProfileRow';

const styles = StyleSheet.create({});

export type MyProfileProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.MY_PROFILE
>;

const MyProfileComponent = ({navigation}: MyProfileProps) => {
  // functions
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderHeaderTitle = useCallback(() => {
    return <HeaderTitle title={'My Profile'} />;
  }, []);

  const renderLeftButton = useCallback(() => {
    return (
      <TouchableOpacity style={{padding: 15}} onPress={onGoBack}>
        <Icon source={'leftArrow'} />
      </TouchableOpacity>
    );
  }, [onGoBack]);

  const renderRightButton = useCallback(() => {
    return <View />;
  }, []);

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: renderHeaderTitle,
      headerLeft: renderLeftButton,
      headerRight: renderRightButton,
      headerStyle: {backgroundColor: ColorDefault.background},
    });
  }, [navigation, renderHeaderTitle, renderLeftButton, renderRightButton]);

  // render
  return (
    <Background>
      <ProfileRow
        avatar={
          'https://d3f5j9upkzs19s.cloudfront.net/wp-content/uploads/2021/08/Dogecoin-Foundation.jpg'
        }
        content={'myname@gmail.com'}
        canEdit
      />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Email'} content={'myname@gmail.com'} />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Phone Number'} content={'012345678'} />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Name'} content={'My Name'} canEdit />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Gender'} content={'Male'} />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Date of birth'} content={'Set Now'} canEdit />
    </Background>
  );
};

export const MyProfile = memo(MyProfileComponent, isEqual);
