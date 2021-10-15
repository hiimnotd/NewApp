import {moderateScale} from '@app/src/common';
import {Brand, Button, InputField, Space, Text} from '@app/src/components';
import {
  APP_SCREEN,
  UnAuthorizeParamsList,
} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useRef, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const styles = StyleSheet.create({});

export type LoginScreenProps = StackScreenProps<
  UnAuthorizeParamsList,
  APP_SCREEN.LOGIN
>;

const LoginComponent = ({navigation}: LoginScreenProps) => {
  // state
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const userRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // function
  const onNavigateRegister = useCallback(() => {
    navigation.navigate(APP_SCREEN.REGISTER);
  }, [navigation]);

  const onLogin = useCallback(() => {
    navigation.navigate(APP_SCREEN.AUTHORIZE);
  }, [navigation]);

  const onSubmitUser = useCallback(() => {
    userRef.current?.blur();
  }, []);

  // render
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(20),
        backgroundColor: ColorDefault.background,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Space height={75} />
          <Brand />
          <Space height={40} />
          <InputField
            ref={userRef}
            setValue={setUserName}
            onEndEditing={onSubmitUser}
            label={'EMAIL'}
          />
          <Space height={20} />
          <InputField
            setValue={setPassword}
            ref={passwordRef}
            label={'PASSWORD'}
          />
          <Space height={20} />
          <Button
            buttonLabelTx={'Login'}
            paddingVertical={10}
            borderRadius={10}
            onPress={onLogin}
          />
          <Space height={20} />
          <TouchableOpacity
            onPress={onNavigateRegister}
            style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <Text
              text={'Not having an account? '}
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
              Sign Up
            </Text>
          </TouchableOpacity>
          <Space height={50} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const Login = memo(LoginComponent, isEqual);
