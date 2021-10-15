import {moderateScale} from '@app/src/common';
import {Brand, Button, InputField, Space, Text} from '@app/src/components';
import {
  APP_SCREEN,
  UnAuthorizeParamsList,
} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({});

export type RegisterScreenProps = StackScreenProps<
  UnAuthorizeParamsList,
  APP_SCREEN.REGISTER
>;

const RegisterComponent = ({navigation}: RegisterScreenProps) => {
  // state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  //function
  const onNavigateLogin = useCallback(() => {
    navigation.navigate(APP_SCREEN.LOGIN);
  }, [navigation]);

  const onRegister = useCallback(() => {
    navigation.navigate(APP_SCREEN.AUTHORIZE);
  }, [navigation]);

  // render
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(20),
        backgroundColor: ColorDefault.background,
      }}>
      <Space height={20} />
      <Brand spacer={30} />
      <Space height={30} />
      <InputField setValue={setFullName} label={'FULL NAME'} />
      <Space height={20} />
      <InputField setValue={setEmail} label={'EMAIL'} />
      <Space height={20} />
      <InputField setValue={setPhoneNumber} label={'PHONE NUMBER'} />
      <Space height={20} />
      <InputField setValue={setPassword} label={'PASSWORD'} />
      <Space height={20} />
      <Button
        buttonLabelTx={'Sign Up'}
        paddingVertical={10}
        borderRadius={10}
        onPress={onRegister}
      />
      <Space height={20} />
      <TouchableOpacity
        onPress={onNavigateLogin}
        style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <Text
          text={'Already have an account? '}
          style={{
            fontSize: fontSizeDefault.FONT_14,
            color: ColorDefault.primary,
          }}
        />
        <Text
          style={{
            fontSize: fontSizeDefault.FONT_14,
            color: ColorDefault.primary,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const Register = memo(RegisterComponent, isEqual);
