import {useSelector} from '@app/src/common';
import {HeaderTitle, Icon} from '@app/src/components';
import {Background} from '@app/src/components/Background/Background';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {ProfileRow} from './components/ProfileRow';

const styles = StyleSheet.create({});

export type MyProfileProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.MY_PROFILE
>;

const MyProfileComponent = ({navigation}: MyProfileProps) => {
  const profile = useSelector(x => x.app.profile);

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

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: renderHeaderTitle,
      headerLeft: renderLeftButton,
      headerRight: renderRightButton,
      headerStyle: {backgroundColor: ColorDefault.background},
    });
  }, [navigation, renderHeaderTitle, renderLeftButton, renderRightButton]);

  const onNavigateEdit = useCallback(() => {
    navigation.navigate(APP_SCREEN.EDIT_PROFILE);
  }, [navigation]);

  // render
  return (
    <Background>
      <ProfileRow
        avatar={
          'https://d3f5j9upkzs19s.cloudfront.net/wp-content/uploads/2021/08/Dogecoin-Foundation.jpg'
        }
        content={'Change Avatar'}
        contentColor={'#F15D59'}
        canEdit
      />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Email'} content={profile.email} />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Phone Number'} content={profile.phone} />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow
        title={'Name'}
        content={profile.name}
        canEdit
        onNavigateEdit={onNavigateEdit}
      />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow
        title={'Gender'}
        content={profile.gender === 0 ? 'Male' : 'Female'}
      />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <ProfileRow title={'Date of birth'} content={'Set Now'} canEdit />
    </Background>
  );
};

export const MyProfile = memo(MyProfileComponent, isEqual);
