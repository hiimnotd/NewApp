import {
  Background,
  Button,
  HeaderTitle,
  Icon,
  Space,
} from '@app/src/components';
import {
  APP_SCREEN,
  UnAuthorizeParamsList,
} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
});

export type ForgotPasswordProps = StackScreenProps<
  UnAuthorizeParamsList,
  APP_SCREEN.FORGOT_PASSWORD
>;

const ForgotPasswordComponent = ({navigation}: ForgotPasswordProps) => {
  const [email, setEmail] = useState<string>('');

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderHeaderTitle = useCallback(() => {
    return <HeaderTitle title={'Forgot Password'} />;
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

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  return (
    <Background>
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <View style={styles.inputField}>
        <TextInput
          placeholder={'Your Email Address'}
          placeholderTextColor={'#013C5C50'}
          style={styles.textInput}
          onChangeText={onChangeEmail}
          underlineColorAndroid={'transparent'}
          secureTextEntry
        />
      </View>
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <Space height={30} />
      <View style={{paddingHorizontal: 20}}>
        <Button
          buttonColor={email.length <= 0 ? '#B2B2B2' : '#F15D59'}
          buttonLabelTx={'SAVE'}
          borderColor={email.length <= 0 ? '#fff' : '#F15D59'}
          borderRadius={0}
          paddingVertical={10}
          activeOpacity={email.length <= 0 ? 1 : 0}
        />
      </View>
    </Background>
  );
};

export const ForgotPassword = memo(ForgotPasswordComponent, isEqual);
