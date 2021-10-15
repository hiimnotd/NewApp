import {moderateScale} from '@app/src/common';
import {Button, Space, Text} from '@app/src/components';
import {Brand} from '@app/src/components/Brand/Brand';
import {
  APP_SCREEN,
  UnAuthorizeParamsList,
} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    backgroundColor: ColorDefault.background,
    justifyContent: 'space-between',
  },
  description: {
    textAlign: 'center',
  },
});

export type StartScreenProps = StackScreenProps<
  UnAuthorizeParamsList,
  APP_SCREEN.START
>;

const StartComponent = ({navigation}: StartScreenProps) => {
  // function
  const onNavigateLogin = useCallback(() => {
    navigation.navigate(APP_SCREEN.LOGIN);
  }, [navigation]);

  const onNavigateRegister = useCallback(() => {
    navigation.navigate(APP_SCREEN.REGISTER);
  }, [navigation]);

  // render
  return (
    <View style={styles.container}>
      <View>
        <Space height={75} />
        <Brand />
        <Space height={50} />
        <Button
          onPress={onNavigateLogin}
          buttonLabelTx={'Sign In'}
          paddingVertical={10}
          borderRadius={10}
        />
        <Space height={20} />
        <Button
          onPress={onNavigateRegister}
          buttonLabelTx={'Sign Up'}
          paddingVertical={10}
          borderRadius={10}
          buttonColor={'transparent'}
          labelColor={ColorDefault.primary}
        />
      </View>
      <View>
        <Text
          text={'Welcome back to our app.\nHave a great time ahead!'}
          style={styles.description}
        />
        <Space height={30} />
      </View>
    </View>
  );
};

export const Start = memo(StartComponent, isEqual);
