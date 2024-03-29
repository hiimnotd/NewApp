import {
  Background,
  Button,
  HeaderTitle,
  Icon,
  Space,
  Text,
} from '@app/src/components';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    backgroundColor: ColorDefault.offWhite,
    borderColor: ColorDefault.primary,
    paddingHorizontal: 20,
  },
  textInput: {
    flex: 1,
    fontSize: fontSizeDefault.FONT_14,
    color: ColorDefault.primary,
    paddingVertical: 5,
    backgroundColor: ColorDefault.offWhite,
  },
  description: {
    color: ColorDefault.primary,
    fontSize: fontSizeDefault.FONT_12,
    paddingLeft: 20,
    paddingVertical: 7,
  },
});

export type ChangePasswordProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.CHANGE_PASSWORD
>;

const ChangePasswordComponent = ({navigation}: ChangePasswordProps) => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const canSave = useMemo<boolean>(() => {
    return newPassword !== '' && confirmPassword !== '';
  }, [confirmPassword, newPassword]);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderHeaderTitle = useCallback(() => {
    return <HeaderTitle title={'Change Password'} />;
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

  const onChangePassword = useCallback((text: string) => {
    setNewPassword(text);
  }, []);

  const onChangeConfirm = useCallback((text: string) => {
    setConfirmPassword(text);
  }, []);

  return (
    <Background>
      <Text style={styles.description}>Account Settings</Text>
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <View style={styles.inputField}>
        <TextInput
          placeholder={'New password'}
          placeholderTextColor={'#013C5C50'}
          style={styles.textInput}
          onChangeText={onChangePassword}
          underlineColorAndroid={'transparent'}
          secureTextEntry
        />
      </View>
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <View style={styles.inputField}>
        <TextInput
          placeholder={'Confirm password'}
          placeholderTextColor={'#013C5C50'}
          style={styles.textInput}
          onChangeText={onChangeConfirm}
          underlineColorAndroid={'transparent'}
          secureTextEntry
        />
      </View>
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <Space height={30} />
      <View style={{paddingHorizontal: 20}}>
        <Button
          buttonColor={canSave ? '#F15D59' : ColorDefault.disable}
          buttonLabelTx={'SAVE'}
          borderColor={canSave ? '#F15D59' : ColorDefault.disable}
          borderRadius={0}
          paddingVertical={10}
          activeOpacity={canSave ? 0 : 1}
        />
      </View>
    </Background>
  );
};

export const ChangePassword = memo(ChangePasswordComponent, isEqual);
